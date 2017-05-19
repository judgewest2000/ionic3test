import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage,  NavParams, ViewController } from 'ionic-angular';

declare var google;

@IonicPage()
@Component({
  selector: 'page-map-view',
  templateUrl: 'map-view.html',
})
export class MapViewPage {

  @ViewChild('map') mapElement: ElementRef;


  constructor(private viewController: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    let map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    setTimeout(() => {
      let geocoder = new google.maps.Geocoder();

      let address = '3 Eyre Close, Brayton, Selby, YO8 9SQ';

      if (geocoder) {
        geocoder.geocode({
          'address': address
        }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {

              map.setCenter(results[0].geometry.location);

              var infowindow = new google.maps.InfoWindow({
                content: '<b>' + address + '</b>',
                size: new google.maps.Size(150, 50)
              });

              var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map,
                title: address
              });
              google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
              });

            } else {
              alert("No results found");
            }
          } else {
            alert("Geocode was not successful for the following reason: " + status);
          }
        });
      }

    }, 2000);



  }

  close() {

    this.viewController.dismiss();
  }


}
