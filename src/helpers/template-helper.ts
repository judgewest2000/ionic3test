
let endsWith = (value: string, lookup: string) => value.toLowerCase().substring(value.length - lookup.length) === lookup.toLowerCase();

export function TemplateGetHelper<T>(templateName: string) {
    const all = [
        {
            "name": "facetedsearchfilteridsdto",
            "blob": {
                "name": null,
                "deleted": false,
                "valueId": 0,
                "id": 0,
                "parentId": null
            }
        },
        {
            "name": "facetedsearchresultfilterlistitemdto",
            "blob": {
                "count": 0,
                "checked": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "facetedsearchdto",
            "blob": {
                "filters": [],
                "entityType": 0,
                "name": null,
                "editable": true,
                "groupId": null,
                "searchText": null,
                "searchFields": null,
                "searchMode": "all",
                "queryType": "full",
                "scoringProfile": null,
                "deleted": false,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "facetedsearchfilterdto",
            "blob": {
                "filterKey": null,
                "value": null,
                "ids": [],
                "op": 0,
                "facetedSearchId": 0,
                "enabled": false,
                "deleted": false,
                "id": 0
            }
        },
        {
            "name": "facetedsearchresultfilterdto",
            "blob": {
                "filterKey": null,
                "name": null,
                "filters": null,
                "id": 0
            }
        },
        {
            "name": "socialwallconfigdto",
            "blob": {
                "maxNumCanvases": 0
            }
        },
        {
            "name": "emaildistributioncontactlistitemdto",
            "blob": {
                "outletName": null,
                "id": 0,
                "name": null,
                "communicationEmailAddress": null
            }
        },
        {
            "name": "emaildistributioncontactdto",
            "blob": {
                "id": 0,
                "deleted": false,
                "contact": {
                    "outletName": null,
                    "id": 0,
                    "name": null,
                    "communicationEmailAddress": null
                }
            }
        },
        {
            "name": "emaildistributionentityitemdto",
            "blob": {
                "id": 0,
                "name": null,
                "communicationEmailAddress": null
            }
        },
        {
            "name": "emaildistributionoutletdto",
            "blob": {
                "id": 0,
                "deleted": false,
                "outlet": null
            }
        },
        {
            "name": "emaildistributionoutletlistitemdto",
            "blob": {
                "id": 0,
                "name": null,
                "communicationEmailAddress": null
            }
        },
        {
            "name": "emaildto",
            "blob": {
                "fromName": null,
                "replyToEmail": null,
                "subject": null,
                "body": null,
                "recipients": []
            }
        },
        {
            "name": "emaildtorecipientdto",
            "blob": {
                "contact": {
                    "name": null,
                    "id": 0
                },
                "outlet": {
                    "name": null,
                    "id": 0
                },
                "emailAddress": null
            }
        },
        {
            "name": "globalcategorydto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "constituencydto",
            "blob": {
                "id": 0,
                "deleted": false,
                "name": null,
                "ordinality": 0,
                "outlet": null
            }
        },
        {
            "name": "contactpositiontypedto",
            "blob": {
                "id": 0,
                "deleted": false,
                "name": null,
                "ordinality": 0
            }
        },
        {
            "name": "clientoutletfieldvisibilitydto",
            "blob": {
                "id": 0,
                "enabled": false,
                "field": {
                    "id": 0,
                    "name": null,
                    "ordinality": 0,
                    "shortName": ""
                }
            }
        },
        {
            "name": "grouptypedto",
            "blob": {
                "id": 0,
                "deleted": false,
                "name": null,
                "ordinality": 0
            }
        },
        {
            "name": "interactioncontactdto",
            "blob": {
                "deleted": false,
                "contact": null,
                "id": 0,
                "status": null
            }
        },
        {
            "name": "interactioncontactlistitemdto",
            "blob": {
                "id": 0,
                "name": null,
                "communicationEmailAddress": null,
                "communicationPhoneNumber": null,
                "outletId": 0,
                "outletName": null
            }
        },
        {
            "name": "interactiondto",
            "blob": {
                "deleted": false,
                "editable": true,
                "name": null,
                "details": null,
                "location": null,
                "interactionDateTime": "0001-01-01T00:00:00",
                "interactionType": {
                    "name": null,
                    "id": 0
                },
                "contacts": [],
                "additionalContacts": null,
                "udfCollection": {
                    "id": 0,
                    "dropdown01": {
                        "id": null,
                        "name": null
                    },
                    "dropdown02": {
                        "id": null,
                        "name": null
                    },
                    "dropdown03": {
                        "id": null,
                        "name": null
                    },
                    "dropdown04": {
                        "id": null,
                        "name": null
                    },
                    "dropdown05": {
                        "id": null,
                        "name": null
                    },
                    "dropdown06": {
                        "id": null,
                        "name": null
                    },
                    "dropdown07": {
                        "id": null,
                        "name": null
                    },
                    "dropdown08": {
                        "id": null,
                        "name": null
                    },
                    "dropdown09": {
                        "id": null,
                        "name": null
                    },
                    "dropdown10": {
                        "id": null,
                        "name": null
                    },
                    "dropdown11": {
                        "id": null,
                        "name": null
                    },
                    "dropdown12": {
                        "id": null,
                        "name": null
                    },
                    "dropdown13": {
                        "id": null,
                        "name": null
                    },
                    "dropdown14": {
                        "id": null,
                        "name": null
                    },
                    "dropdown15": {
                        "id": null,
                        "name": null
                    },
                    "checkbox01": false,
                    "checkbox02": false,
                    "checkbox03": false,
                    "checkbox04": false,
                    "checkbox05": false,
                    "checkbox06": false,
                    "checkbox07": false,
                    "checkbox08": false,
                    "checkbox09": false,
                    "checkbox10": false,
                    "checkbox11": false,
                    "checkbox12": false,
                    "checkbox13": false,
                    "checkbox14": false,
                    "checkbox15": false,
                    "textline01": null,
                    "textline02": null,
                    "textline03": null,
                    "textline04": null,
                    "textline05": null,
                    "textline06": null,
                    "textline07": null,
                    "textline08": null,
                    "textline09": null,
                    "textline10": null,
                    "textline11": null,
                    "textline12": null,
                    "textline13": null,
                    "textline14": null,
                    "textline15": null,
                    "textline16": null,
                    "textline17": null,
                    "textline18": null,
                    "textline19": null,
                    "textline20": null,
                    "textline21": null,
                    "textline22": null,
                    "textline23": null,
                    "textline24": null,
                    "textline25": null,
                    "textline26": null,
                    "textline27": null,
                    "textline28": null,
                    "textline29": null,
                    "textline30": null,
                    "textbox01": null,
                    "textbox02": null,
                    "textbox03": null,
                    "textbox04": null,
                    "textbox05": null,
                    "textbox06": null,
                    "textbox07": null,
                    "textbox08": null,
                    "textbox09": null,
                    "textbox10": null,
                    "textbox11": null,
                    "textbox12": null,
                    "textbox13": null,
                    "textbox14": null,
                    "textbox15": null,
                    "multiselect01": [],
                    "multiselect02": [],
                    "multiselect03": [],
                    "multiselect04": [],
                    "multiselect05": [],
                    "multiselect06": [],
                    "multiselect07": [],
                    "multiselect08": [],
                    "multiselect09": [],
                    "multiselect10": [],
                    "multiselect11": [],
                    "multiselect12": [],
                    "multiselect13": [],
                    "multiselect14": [],
                    "multiselect15": [],
                    "multiselect16": [],
                    "multiselect17": [],
                    "multiselect18": [],
                    "multiselect19": [],
                    "multiselect20": []
                },
                "tags": [],
                "status": {
                    "name": null,
                    "id": 0
                },
                "globalCategory": {
                    "name": null,
                    "id": 0
                },
                "direction": 0,
                "owner": null,
                "internalContact": null,
                "internalMemo": null,
                "internalResponseTime": null,
                "response": null,
                "responseDateTime": "0001-01-01T00:00:00",
                "responder": null,
                "responseMethod": null,
                "outcome": null,
                "releases": [],
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "interactionreleasedto",
            "blob": {
                "deleted": false,
                "release": null,
                "id": 0
            }
        },
        {
            "name": "tagcollectionitemdto",
            "blob": {
                "deleted": false,
                "tag": {
                    "name": null,
                    "id": 0
                },
                "id": 0
            }
        },
        {
            "name": "interactiontypedto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "listitemordinalitydto",
            "blob": {
                "ordinality": 0,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "omcdistributiondto",
            "blob": {
                "url": null,
                "deleted": false,
                "editable": false,
                "release": {
                    "name": null,
                    "id": 0
                },
                "status": 1,
                "distributionType": 0,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "partydto",
            "blob": {
                "id": 0,
                "deleted": false,
                "code": null,
                "name": null,
                "ordinality": 0
            }
        },
        {
            "name": "politicaloutletdto",
            "blob": {
                "id": 0,
                "name": null,
                "mediaTypeId": 0,
                "mediaTypeName": null,
                "hasConstituencies": false
            }
        },
        {
            "name": "contactpositiondto",
            "blob": {
                "deleted": false,
                "relatedContact": null,
                "startDate": null,
                "endDate": null,
                "contactPositionType": null,
                "organisation": null,
                "position": null,
                "qualification": null,
                "subject": null,
                "id": 0
            }
        },
        {
            "name": "proprietarycontactdatadto",
            "blob": {
                "contactId": 0,
                "title": null,
                "preferredCommunicationMethod": null,
                "id": 0,
                "deleted": false,
                "clientId": 0,
                "note": null,
                "pitch": null,
                "address": {
                    "line1": null,
                    "line2": null,
                    "city": null,
                    "county": null,
                    "postalCode": null,
                    "country": {
                        "name": null,
                        "id": 7
                    },
                    "state": null,
                    "addressType": {
                        "name": null,
                        "id": 1
                    },
                    "isParentAddress": false,
                    "id": 0
                },
                "phoneNumber": null,
                "mobileNumber": null,
                "faxNumber": null,
                "emailAddress": null,
                "twitterUrl": null,
                "twitterHandle": null,
                "facebookUrl": null,
                "linkedInUrl": null,
                "websiteUrl": null,
                "useEmailAddressForReleases": true,
                "useContactDetailsInUi": true
            }
        },
        {
            "name": "proprietaryoutletdatadto",
            "blob": {
                "outletId": 0,
                "id": 0,
                "deleted": false,
                "clientId": 0,
                "note": null,
                "pitch": null,
                "address": {
                    "line1": null,
                    "line2": null,
                    "city": null,
                    "county": null,
                    "postalCode": null,
                    "country": {
                        "name": null,
                        "id": 7
                    },
                    "state": null,
                    "addressType": {
                        "name": null,
                        "id": 1
                    },
                    "isParentAddress": false,
                    "id": 0
                },
                "phoneNumber": null,
                "mobileNumber": null,
                "faxNumber": null,
                "emailAddress": null,
                "twitterUrl": null,
                "twitterHandle": null,
                "facebookUrl": null,
                "linkedInUrl": null,
                "websiteUrl": null,
                "useEmailAddressForReleases": true,
                "useContactDetailsInUi": true
            }
        },
        {
            "name": "realwirecategorydto",
            "blob": {
                "name": null,
                "id": 0
            }
        },
        {
            "name": "realwiredistributionassetbasedto",
            "blob": {
                "assetUrl": null,
                "name": null,
                "deleted": false,
                "id": 0
            }
        },
        {
            "name": "realwiredistributioncategorydto",
            "blob": {
                "id": 0,
                "deleted": false,
                "realwireCategory": null
            }
        },
        {
            "name": "realwiredistributiondto",
            "blob": {
                "images": [],
                "attachments": [],
                "links": [],
                "categories": [],
                "tags": null,
                "internalContactEmail": null,
                "internalContactTelephone": null,
                "deleted": false,
                "editable": false,
                "release": {
                    "name": null,
                    "id": 0
                },
                "status": 1,
                "distributionType": 0,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "realwiredistributionlinkdto",
            "blob": {
                "id": 0,
                "deleted": false,
                "name": null,
                "url": null
            }
        },
        {
            "name": "socialwalldistributiondto",
            "blob": {
                "socialWall": {
                    "name": null,
                    "id": 0
                },
                "socialWallItem": null,
                "deleted": false,
                "editable": false,
                "release": {
                    "name": null,
                    "id": 0
                },
                "status": 1,
                "distributionType": 0,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "socialwallitemsummarydto",
            "blob": {
                "name": null,
                "socialProvider": {
                    "name": null,
                    "imageSource": null,
                    "fontAwesomeClass": null,
                    "useFontAwesome": false,
                    "contentSource": null,
                    "contentPlaceHolder": null,
                    "deleted": false,
                    "id": 0
                },
                "socialProviderType": {
                    "name": null,
                    "deleted": false,
                    "id": 0
                },
                "deleted": false,
                "ordinality": 0,
                "public": true,
                "showName": false,
                "isContactsWidget": false,
                "isInfoColumnContent": false,
                "isAboutUsWidget": false,
                "slug": null,
                "editable": false,
                "path": null,
                "socialWall": {
                    "name": null,
                    "id": 0
                },
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "socialwalllinkdto",
            "blob": {
                "id": 0,
                "socialName": null,
                "socialUrl": null,
                "fontAwesomeClass": null
            }
        },
        {
            "name": "socialwallsummarydto",
            "blob": {
                "socialWallItems": [],
                "deleted": false,
                "name": null,
                "socialWallLayout": {
                    "name": null,
                    "imageSource": null,
                    "deleted": false,
                    "id": 0
                },
                "socialWallTheme": {
                    "name": "Default",
                    "deleted": false,
                    "id": 1
                },
                "publishedDate": "0001-01-01T00:00:00",
                "imageSource": null,
                "public": false,
                "showVuelioLogo": false,
                "editable": false,
                "slug": null,
                "path": null,
                "sortOrder": 0,
                "isHorizontalOrder": false,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "socialwallthemedto",
            "blob": {
                "name": null,
                "deleted": false,
                "id": 0
            }
        },
        {
            "name": "tagdto",
            "blob": {
                "name": null,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "udfmultiselectdto",
            "blob": {
                "id": 0,
                "deleted": false,
                "udfMultiselect": {
                    "name": null,
                    "id": 0
                }
            }
        },
        {
            "name": "customlistitemdto",
            "blob": {
                "id": 0,
                "name": null,
                "ordinality": 0,
                "deleted": false
            }
        },
        {
            "name": "addressdto",
            "blob": {
                "line1": null,
                "line2": null,
                "city": null,
                "county": null,
                "postalCode": null,
                "country": {
                    "name": null,
                    "id": 7
                },
                "state": null,
                "addressType": {
                    "name": null,
                    "id": 1
                },
                "isParentAddress": false,
                "id": 0
            }
        },
        {
            "name": "addresstypedto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "badgedto",
            "blob": {
                "deleted": false,
                "name": null,
                "awarded": null,
                "imageUrl": null,
                "hyperlinkUrl": null,
                "id": 0
            }
        },
        {
            "name": "categorydto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "clientcontacttypedto",
            "blob": {
                "id": 0,
                "contactType": {
                    "name": null,
                    "id": 0
                },
                "enabled": true,
                "fields": []
            }
        },
        {
            "name": "clientcontacttypefielddto",
            "blob": {
                "id": 0,
                "contactTypeField": {
                    "id": 0,
                    "enabled": false,
                    "field": {
                        "id": 0,
                        "name": null,
                        "ordinality": 0,
                        "shortName": ""
                    }
                },
                "enabled": false
            }
        },
        {
            "name": "clientdataareadto",
            "blob": {
                "deleted": false,
                "dataArea": {
                    "id": 0,
                    "name": null,
                    "isCustomerData": false,
                    "isPaidForOption": false
                },
                "id": 0
            }
        },
        {
            "name": "clientlabeldto",
            "blob": {
                "id": 0,
                "singular": null,
                "plural": null,
                "label": {
                    "name": null,
                    "id": 0
                }
            }
        },
        {
            "name": "contacttypedto",
            "blob": {
                "name": null,
                "deleted": false,
                "id": 0,
                "enabled": false,
                "fields": null
            }
        },
        {
            "name": "contacttypefielddto",
            "blob": {
                "id": 0,
                "enabled": false,
                "field": {
                    "id": 0,
                    "name": null,
                    "ordinality": 0,
                    "shortName": ""
                }
            }
        },
        {
            "name": "dataareadto",
            "blob": {
                "id": 0,
                "name": null,
                "isCustomerData": false,
                "isPaidForOption": false
            }
        },
        {
            "name": "emaildistributiondto",
            "blob": {
                "template": {
                    "name": null,
                    "id": 0
                },
                "greetingPrefix": null,
                "greetingFormat": 0,
                "greetingSuffix": null,
                "groups": [],
                "manualRecipients": [],
                "contacts": [],
                "outlets": [],
                "distinctRecipientCount": 0,
                "sentCount": 0,
                "softBounceCount": 0,
                "hardBounceCount": 0,
                "openedCount": 0,
                "clickedCount": 0,
                "spamReportCount": 0,
                "unsubscribedCount": 0,
                "sendFromEmailPrefix": null,
                "sendFromEmailDomain": null,
                "sendFromReplyToDomain": null,
                "sendFromName": null,
                "deleted": false,
                "editable": false,
                "release": {
                    "name": null,
                    "id": 0
                },
                "status": 1,
                "distributionType": 0,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "emaildistributiongroupdto",
            "blob": {
                "deleted": false,
                "group": null,
                "id": 0
            }
        },
        {
            "name": "emaildistributionmanualrecipientdto",
            "blob": {
                "deleted": false,
                "emailAddress": null,
                "salutation": null,
                "firstName": null,
                "lastName": null,
                "id": 0
            }
        },
        {
            "name": "emailtemplatedto",
            "blob": {
                "deleted": false,
                "name": null,
                "bodyHtml": null,
                "bodyText": null,
                "css": null,
                "fromEmail": null,
                "fromName": null,
                "subject": null,
                "screenshotUrl": null,
                "sourceKey": null,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "entityshoppingcartdto",
            "blob": {
                "deleted": false,
                "entityId": 0,
                "entityType": 0,
                "id": 0
            }
        },
        {
            "name": "fielddto",
            "blob": {
                "id": 0,
                "name": null,
                "ordinality": 0,
                "shortName": ""
            }
        },
        {
            "name": "groupentitydto",
            "blob": {
                "deleted": false,
                "entityId": 0,
                "name": null,
                "outletName": null,
                "mediaType": null,
                "jobTitle": null,
                "entityType": 0,
                "entityTypeName": "Outlet",
                "id": 0,
                "status": 0
            }
        },
        {
            "name": "identifierstatusdto",
            "blob": {
                "name": null,
                "deleted": false,
                "id": 0
            }
        },
        {
            "name": "keyvaluestoredto",
            "blob": {
                "name": null,
                "value": null,
                "level": 0,
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null,
                "id": 0
            }
        },
        {
            "name": "labeldto",
            "blob": {
                "id": 0,
                "name": null,
                "defaultSingular": null,
                "defaultPlural": null,
                "ordinality": 0
            }
        },
        {
            "name": "linkedcontactprofiledto",
            "blob": {
                "title": null,
                "name": null,
                "outletId": 0,
                "outletName": null,
                "id": 0
            }
        },
        {
            "name": "releasedto",
            "blob": {
                "deleted": false,
                "editable": true,
                "name": null,
                "headline": null,
                "displayDateTime": null,
                "subheading": null,
                "coreCopy": null,
                "notesToEditor": null,
                "boilerPlate": null,
                "scheduledDateTime": null,
                "scheduledTimeZoneView": null,
                "startDateTime": null,
                "endDateTime": null,
                "tags": [],
                "globalCategory": {
                    "name": null,
                    "id": 0
                },
                "isTest": false,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "socialstatisticitemdto",
            "blob": {
                "name": null,
                "statisticsValue": null,
                "numericalValue": 0,
                "percentageValue": 0.0,
                "useFontAwesome": false,
                "fontAwesomeClass": null,
                "displayColor": null,
                "deleted": false,
                "id": 0
            }
        },
        {
            "name": "socialwalllayoutdto",
            "blob": {
                "name": null,
                "imageSource": null,
                "deleted": false,
                "id": 0
            }
        },
        {
            "name": "socialproviderdto",
            "blob": {
                "name": null,
                "imageSource": null,
                "fontAwesomeClass": null,
                "useFontAwesome": false,
                "contentSource": null,
                "contentPlaceHolder": null,
                "deleted": false,
                "id": 0
            }
        },
        {
            "name": "socialprovidertypedto",
            "blob": {
                "name": null,
                "deleted": false,
                "id": 0
            }
        },
        {
            "name": "socialwalldto",
            "blob": {
                "socialWallItems": [],
                "deleted": false,
                "name": null,
                "socialWallLayout": {
                    "name": null,
                    "imageSource": null,
                    "deleted": false,
                    "id": 0
                },
                "socialWallTheme": {
                    "name": "Default",
                    "deleted": false,
                    "id": 1
                },
                "publishedDate": "0001-01-01T00:00:00",
                "imageSource": null,
                "public": false,
                "showVuelioLogo": false,
                "editable": false,
                "slug": null,
                "path": null,
                "sortOrder": 0,
                "isHorizontalOrder": false,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "socialwallitemdto",
            "blob": {
                "socialValue": null,
                "socialValueSourceUrl": null,
                "socialStatisticItems": [],
                "name": null,
                "socialProvider": {
                    "name": null,
                    "imageSource": null,
                    "fontAwesomeClass": null,
                    "useFontAwesome": false,
                    "contentSource": null,
                    "contentPlaceHolder": null,
                    "deleted": false,
                    "id": 0
                },
                "socialProviderType": {
                    "name": null,
                    "deleted": false,
                    "id": 0
                },
                "deleted": false,
                "ordinality": 0,
                "public": true,
                "showName": false,
                "isContactsWidget": false,
                "isInfoColumnContent": false,
                "isAboutUsWidget": false,
                "slug": null,
                "editable": false,
                "path": null,
                "socialWall": {
                    "name": null,
                    "id": 0
                },
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "listitementitydto",
            "blob": {
                "entityType": 0,
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "listitemdisplaydto",
            "blob": {
                "displayName": null,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "listitemhierarchydto",
            "blob": {
                "children": [],
                "name": null,
                "id": 0
            }
        },
        {
            "name": "notedto",
            "blob": {
                "editable": false,
                "deleted": false,
                "title": null,
                "description": null,
                "contactId": null,
                "outletId": null,
                "interactionId": null,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "outletlistitemdto",
            "blob": {
                "name": null,
                "id": 0,
                "dataAreaId": 0,
                "viewable": false
            }
        },
        {
            "name": "outletmatchdto",
            "blob": {
                "id": 0,
                "providerId": 0,
                "providerOutletId": null,
                "providerOutletUrl": null,
                "providerName": null,
                "providerOutletName": null,
                "providerOutletAdditionalInformation": null,
                "canonicalOutletId": null,
                "canonicalOutletName": null,
                "identifierStatus": null,
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null,
                "countryId": null
            }
        },
        {
            "name": "outletsummarydto",
            "blob": {
                "id": 0,
                "name": null,
                "line1": null,
                "line2": null,
                "city": null,
                "county": null,
                "postalCode": null,
                "state": null,
                "country": null,
                "mainHomepage": null,
                "emailAddress": null,
                "phoneNumber": null,
                "topicList": null,
                "dataAreaId": 0,
                "viewable": false
            }
        },
        {
            "name": "recordmodifieddto",
            "blob": {
                "id": 0,
                "modified": "0001-01-01T00:00:00"
            }
        },
        {
            "name": "communicationemaildto",
            "blob": {
                "deleted": false,
                "emailAddress": null,
                "emailType": {
                    "name": null,
                    "id": 3
                },
                "id": 0
            }
        },
        {
            "name": "communicationmethoddto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0,
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00"
            }
        },
        {
            "name": "communicationphonenumberdto",
            "blob": {
                "deleted": false,
                "phoneNumberType": {
                    "name": null,
                    "id": 3
                },
                "id": 0,
                "dialNumber": null,
                "countryCode": null,
                "areaCode": null,
                "extension": null,
                "formatted": null
            }
        },
        {
            "name": "communicationsocialmediadto",
            "blob": {
                "deleted": false,
                "socialMediaType": {
                    "deleted": false,
                    "name": null,
                    "glyphCode": null,
                    "glyphColour": null,
                    "urlRoot": null,
                    "id": 0,
                    "created": null,
                    "modified": null
                },
                "url": null,
                "id": 0
            }
        },
        {
            "name": "contactidentitydto",
            "blob": {
                "deleted": false,
                "id": 0,
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null,
                "dataArea": null,
                "sourceKey": null
            }
        },
        {
            "name": "departmentdto",
            "blob": {
                "deleted": false,
                "phoneNumber": null,
                "faxNumber": null,
                "email": null,
                "homePage": null,
                "departmentType": null,
                "id": 0
            }
        },
        {
            "name": "departmentphonenumberdto",
            "blob": {
                "deleted": false,
                "id": 0,
                "dialNumber": null,
                "countryCode": null,
                "areaCode": null,
                "extension": null,
                "formatted": null
            }
        },
        {
            "name": "departmenttypedto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "edcaldto",
            "blob": {
                "topics": [],
                "outlet": null,
                "contact": null,
                "language": null,
                "issue": null,
                "issueDate": "0001-01-01T00:00:00",
                "deadlineDate": null,
                "description": null,
                "sectionName": null,
                "name": null,
                "featuresLeadDays": 0,
                "advertisingLeadDays": 0,
                "dataArea": null,
                "sourceKey": null,
                "editable": false,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "edcaltopicdto",
            "blob": {
                "deleted": false,
                "topic": null,
                "id": 0
            }
        },
        {
            "name": "emailtypedto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "externalidentifiersystemdto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "focusdto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "languagedto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "listitemdeleteddto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "mediatypegroupdto",
            "blob": {
                "name": null,
                "deleted": false,
                "mediaTypes": null,
                "id": 0
            }
        },
        {
            "name": "networkdto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "groupdto",
            "blob": {
                "deleted": false,
                "name": null,
                "profile": null,
                "isTargetOutletGroup": false,
                "entities": [],
                "editable": true,
                "status": 1,
                "outlet": null,
                "groupType": null,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "outletexternalidentifierdto",
            "blob": {
                "deleted": false,
                "externalIdentifierSystem": null,
                "externalIdentifierId": null,
                "externalIdentifierName": null,
                "id": 0
            }
        },
        {
            "name": "outlettargetareadto",
            "blob": {
                "deleted": false,
                "targetArea": null,
                "id": 0
            }
        },
        {
            "name": "outletradioformatdto",
            "blob": {
                "deleted": false,
                "radioFormat": null,
                "id": 0
            }
        },
        {
            "name": "outletlanguagedto",
            "blob": {
                "deleted": false,
                "language": null,
                "id": 0
            }
        },
        {
            "name": "outletfrequencycodedto",
            "blob": {
                "deleted": false,
                "frequencyCode": null,
                "id": 0
            }
        },
        {
            "name": "outletprofilecodedto",
            "blob": {
                "deleted": false,
                "profileCode": null,
                "id": 0
            }
        },
        {
            "name": "roledto",
            "blob": {
                "name": 0,
                "id": 0,
                "created": null,
                "modified": null
            }
        },
        {
            "name": "showtimedto",
            "blob": {
                "deleted": false,
                "startTime": null,
                "endTime": null,
                "sunday": false,
                "monday": false,
                "tuesday": false,
                "wednesday": false,
                "thursday": false,
                "friday": false,
                "saturday": false,
                "id": 0,
                "onAirTime": null
            }
        },
        {
            "name": "outlettopicdto",
            "blob": {
                "deleted": false,
                "topic": null,
                "id": 0
            }
        },
        {
            "name": "phonenumbertypedto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "radioformatdto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "socialmediatypedto",
            "blob": {
                "deleted": false,
                "name": null,
                "glyphCode": null,
                "glyphColour": null,
                "urlRoot": null,
                "id": 0,
                "created": null,
                "modified": null
            }
        },
        {
            "name": "genderdto",
            "blob": {
                "name": null,
                "deleted": false,
                "id": 0
            }
        },
        {
            "name": "statedto",
            "blob": {
                "code": null,
                "name": null,
                "deleted": false,
                "country": null,
                "id": 0
            }
        },
        {
            "name": "profilecodedto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "mediatypedto",
            "blob": {
                "deleted": false,
                "name": null,
                "group": null,
                "inheritsAddress": false,
                "inheritsAllCommunication": false,
                "inheritsUrl": false,
                "isBureau": false,
                "isOnlineVersion": false,
                "isShow": false,
                "isSpecialSection": false,
                "id": 0
            }
        },
        {
            "name": "optintypedto",
            "blob": {
                "name": null,
                "deleted": false,
                "id": 0
            }
        },
        {
            "name": "frequencycodedto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "targetareadto",
            "blob": {
                "name": null,
                "parent": null,
                "areaType": null,
                "deleted": false,
                "id": 0
            }
        },
        {
            "name": "targetareatypedto",
            "blob": {
                "name": null,
                "deleted": false,
                "country": null,
                "id": 0
            }
        },
        {
            "name": "titledto",
            "blob": {
                "deleted": false,
                "name": null,
                "id": 0
            }
        },
        {
            "name": "topicdto",
            "blob": {
                "deleted": false,
                "parent": null,
                "name": null,
                "id": 0,
                "created": null,
                "modified": null
            }
        },
        {
            "name": "clientdto",
            "blob": {
                "subscribedDataAreas": [],
                "clientLabels": [],
                "contactTypes": [],
                "outletFieldVisibility": [],
                "powers": [],
                "applicantTypes": [],
                "influences": [],
                "userGroups": [],
                "interactionTypes": [],
                "interactionStatuses": [],
                "interactionContactStatuses": [],
                "globalCategories": [],
                "udfDropdown01s": [],
                "udfDropdown02s": [],
                "udfDropdown03s": [],
                "udfDropdown04s": [],
                "udfDropdown05s": [],
                "udfDropdown06s": [],
                "udfDropdown07s": [],
                "udfDropdown08s": [],
                "udfDropdown09s": [],
                "udfDropdown10s": [],
                "udfDropdown11s": [],
                "udfDropdown12s": [],
                "udfDropdown13s": [],
                "udfDropdown14s": [],
                "udfDropdown15s": [],
                "udfMultiselect01s": [],
                "udfMultiselect02s": [],
                "udfMultiselect03s": [],
                "udfMultiselect04s": [],
                "udfMultiselect05s": [],
                "udfMultiselect06s": [],
                "udfMultiselect07s": [],
                "udfMultiselect08s": [],
                "udfMultiselect09s": [],
                "udfMultiselect10s": [],
                "udfMultiselect11s": [],
                "udfMultiselect12s": [],
                "udfMultiselect13s": [],
                "udfMultiselect14s": [],
                "udfMultiselect15s": [],
                "udfMultiselect16s": [],
                "udfMultiselect17s": [],
                "udfMultiselect18s": [],
                "udfMultiselect19s": [],
                "udfMultiselect20s": [],
                "deleted": false,
                "name": null,
                "setInactive": false,
                "vuelioSuffix": null,
                "dataArea": null,
                "sourceKey": null,
                "turnOnRebrand": false,
                "id": 0,
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null,
                "slug": null,
                "elasticEmailApiKey": null,
                "sendFromEmailDefault": null,
                "sendFromEmailDomain": null,
                "sendFromName": null,
                "omcUrl": null,
                "omcUserName": null,
                "omcPassword": null,
                "maxNumCanvases": 0
            }
        },
        {
            "name": "smartsearchdto",
            "blob": {
                "name": null,
                "entityType": null,
                "phone": null,
                "email": null,
                "country": null,
                "website": null,
                "facebook": null,
                "twitter": null,
                "twitterHandle": null,
                "contactOutlet": null,
                "contactOutletId": 0,
                "outletType": null,
                "id": 0,
                "avatarUrl": null
            }
        },
        {
            "name": "communicationdto",
            "blob": {
                "directHomepage": null,
                "mainHomepage": null,
                "editorialCalendarUrl": null,
                "interviewUrl": null,
                "rssUrl": null,
                "avatarUrl": null,
                "emails": [],
                "socialMedia": [],
                "phoneNumbers": [],
                "facebookUrl": null,
                "googlePlusUrl": null,
                "instagramUrl": null,
                "linkedInUrl": null,
                "otherSocialUrl": null,
                "pinterestUrl": null,
                "twitterUrl": null,
                "youTubeUrl": null,
                "emailAddress": null,
                "faxNumber": null,
                "phoneNumber": null,
                "twitterHandle": null,
                "id": 0
            }
        },
        {
            "name": "contactcommunicationmethoddto",
            "blob": {
                "deleted": false,
                "communicationMethod": null,
                "id": 0
            }
        },
        {
            "name": "contactdto",
            "blob": {
                "salutation": null,
                "firstName": null,
                "middleName": null,
                "lastName": null,
                "nameSuffix": null,
                "name": null,
                "displayName": null,
                "gender": {
                    "name": null,
                    "id": 0
                },
                "outlet": {
                    "name": null,
                    "id": 0
                },
                "title": null,
                "profile": null,
                "status": 1,
                "notAPrContact": false,
                "badges": [],
                "linkedProfiles": [],
                "externalIdentifiers": [],
                "topics": [],
                "languages": [],
                "preferredCommunicationMethods": null,
                "address": {
                    "line1": null,
                    "line2": null,
                    "city": null,
                    "county": null,
                    "postalCode": null,
                    "country": {
                        "name": null,
                        "id": 7
                    },
                    "state": null,
                    "addressType": {
                        "name": null,
                        "id": 1
                    },
                    "isParentAddress": false,
                    "id": 0
                },
                "communication": {
                    "directHomepage": null,
                    "mainHomepage": null,
                    "editorialCalendarUrl": null,
                    "interviewUrl": null,
                    "rssUrl": null,
                    "avatarUrl": null,
                    "emails": [],
                    "socialMedia": [],
                    "phoneNumbers": [],
                    "facebookUrl": null,
                    "googlePlusUrl": null,
                    "instagramUrl": null,
                    "linkedInUrl": null,
                    "otherSocialUrl": null,
                    "pinterestUrl": null,
                    "twitterUrl": null,
                    "youTubeUrl": null,
                    "emailAddress": null,
                    "faxNumber": null,
                    "phoneNumber": null,
                    "twitterHandle": null,
                    "id": 0
                },
                "contactIdentityId": 0,
                "contactIdentity": {
                    "deleted": false,
                    "id": 0,
                    "created": "0001-01-01T00:00:00",
                    "modified": "0001-01-01T00:00:00",
                    "createdUser": null,
                    "modifiedUser": null,
                    "dataArea": null,
                    "sourceKey": null
                },
                "deleted": false,
                "enrichment": {
                    "similarWebTrafficLastReceived": null,
                    "similarWebMonthlyTraffic": [],
                    "similarWebSimilarWebsitesLastReceived": null,
                    "similarWebSimilarWebsites": [],
                    "abcLastReturnReleaseDate": null,
                    "abcReportingFrequencyDescription": null,
                    "abcReturns": [],
                    "kloutLastReceived": null,
                    "kloutScore": null,
                    "kloutDeltaDay": null,
                    "kloutDeltaWeek": null,
                    "kloutDeltaMonth": null,
                    "kloutBucket": null,
                    "kredLastReceived": null,
                    "kredInfluenceScore": null,
                    "kredOutreachScore": null,
                    "mozLastReceived": null,
                    "mozSubdomainMozRankNormalised": null,
                    "mozLinks": null,
                    "mozExternalEquityLinks": null,
                    "mozPageAuthority": null,
                    "mozDomainAuthority": null,
                    "mozUrlRankNormalised": 0.0,
                    "ahrefsLastReceived": null,
                    "ahrefsRating": null
                },
                "optInType": {
                    "name": null,
                    "id": 1
                },
                "vuelioInfluencerRating": null,
                "edCalCount": 0,
                "groupCount": 0,
                "noteCount": 0,
                "emailDistributionCount": 0,
                "interactionCount": 0,
                "dataArea": null,
                "sourceKey": null,
                "editable": true,
                "contactType": {
                    "name": null,
                    "id": 100
                },
                "key": false,
                "employer": null,
                "department": null,
                "power": null,
                "applicantType": null,
                "influence": null,
                "udfCollection": {
                    "id": 0,
                    "dropdown01": {
                        "id": null,
                        "name": null
                    },
                    "dropdown02": {
                        "id": null,
                        "name": null
                    },
                    "dropdown03": {
                        "id": null,
                        "name": null
                    },
                    "dropdown04": {
                        "id": null,
                        "name": null
                    },
                    "dropdown05": {
                        "id": null,
                        "name": null
                    },
                    "dropdown06": {
                        "id": null,
                        "name": null
                    },
                    "dropdown07": {
                        "id": null,
                        "name": null
                    },
                    "dropdown08": {
                        "id": null,
                        "name": null
                    },
                    "dropdown09": {
                        "id": null,
                        "name": null
                    },
                    "dropdown10": {
                        "id": null,
                        "name": null
                    },
                    "dropdown11": {
                        "id": null,
                        "name": null
                    },
                    "dropdown12": {
                        "id": null,
                        "name": null
                    },
                    "dropdown13": {
                        "id": null,
                        "name": null
                    },
                    "dropdown14": {
                        "id": null,
                        "name": null
                    },
                    "dropdown15": {
                        "id": null,
                        "name": null
                    },
                    "checkbox01": false,
                    "checkbox02": false,
                    "checkbox03": false,
                    "checkbox04": false,
                    "checkbox05": false,
                    "checkbox06": false,
                    "checkbox07": false,
                    "checkbox08": false,
                    "checkbox09": false,
                    "checkbox10": false,
                    "checkbox11": false,
                    "checkbox12": false,
                    "checkbox13": false,
                    "checkbox14": false,
                    "checkbox15": false,
                    "textline01": null,
                    "textline02": null,
                    "textline03": null,
                    "textline04": null,
                    "textline05": null,
                    "textline06": null,
                    "textline07": null,
                    "textline08": null,
                    "textline09": null,
                    "textline10": null,
                    "textline11": null,
                    "textline12": null,
                    "textline13": null,
                    "textline14": null,
                    "textline15": null,
                    "textline16": null,
                    "textline17": null,
                    "textline18": null,
                    "textline19": null,
                    "textline20": null,
                    "textline21": null,
                    "textline22": null,
                    "textline23": null,
                    "textline24": null,
                    "textline25": null,
                    "textline26": null,
                    "textline27": null,
                    "textline28": null,
                    "textline29": null,
                    "textline30": null,
                    "textbox01": null,
                    "textbox02": null,
                    "textbox03": null,
                    "textbox04": null,
                    "textbox05": null,
                    "textbox06": null,
                    "textbox07": null,
                    "textbox08": null,
                    "textbox09": null,
                    "textbox10": null,
                    "textbox11": null,
                    "textbox12": null,
                    "textbox13": null,
                    "textbox14": null,
                    "textbox15": null,
                    "multiselect01": [],
                    "multiselect02": [],
                    "multiselect03": [],
                    "multiselect04": [],
                    "multiselect05": [],
                    "multiselect06": [],
                    "multiselect07": [],
                    "multiselect08": [],
                    "multiselect09": [],
                    "multiselect10": [],
                    "multiselect11": [],
                    "multiselect12": [],
                    "multiselect13": [],
                    "multiselect14": [],
                    "multiselect15": [],
                    "multiselect16": [],
                    "multiselect17": [],
                    "multiselect18": [],
                    "multiselect19": [],
                    "multiselect20": []
                },
                "monitoringOnly": false,
                "modeOfAddress": null,
                "honorificName": null,
                "placeOfBirth": null,
                "dateOfBirth": null,
                "maritalStatus": null,
                "family": null,
                "politicalBackground": null,
                "professionalInterests": null,
                "recreationalInterests": null,
                "party": null,
                "constituency": null,
                "euGroup": null,
                "otherSeatsHeld": null,
                "majority": null,
                "firstElected": null,
                "positions": [],
                "desk": null,
                "proprietaryData": null,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "contactexternalidentifierdto",
            "blob": {
                "deleted": false,
                "externalIdentifierSystem": null,
                "externalIdentifierId": null,
                "id": 0
            }
        },
        {
            "name": "contactlanguagedto",
            "blob": {
                "deleted": false,
                "language": null,
                "id": 0
            }
        },
        {
            "name": "contacttopicdto",
            "blob": {
                "deleted": false,
                "topic": {
                    "deleted": false,
                    "parent": null,
                    "name": null,
                    "id": 0,
                    "created": null,
                    "modified": null
                },
                "title": {
                    "deleted": false,
                    "name": null,
                    "id": 0
                },
                "id": 0
            }
        },
        {
            "name": "countrydto",
            "blob": {
                "code": null,
                "name": null,
                "deleted": false,
                "states": null,
                "id": 0
            }
        },
        {
            "name": "exampleobjectdto",
            "blob": {
                "deleted": false,
                "userName": null,
                "name": null,
                "setInactive": false,
                "id": 0,
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00"
            }
        },
        {
            "name": "listitemdto",
            "blob": {
                "name": null,
                "id": 0
            }
        },
        {
            "name": "outletdto",
            "blob": {
                "deleted": false,
                "prefix": null,
                "name": null,
                "fullName": null,
                "profile": null,
                "status": 1,
                "communication": {
                    "directHomepage": null,
                    "mainHomepage": null,
                    "editorialCalendarUrl": null,
                    "interviewUrl": null,
                    "rssUrl": null,
                    "avatarUrl": null,
                    "emails": [],
                    "socialMedia": [],
                    "phoneNumbers": [],
                    "facebookUrl": null,
                    "googlePlusUrl": null,
                    "instagramUrl": null,
                    "linkedInUrl": null,
                    "otherSocialUrl": null,
                    "pinterestUrl": null,
                    "twitterUrl": null,
                    "youTubeUrl": null,
                    "emailAddress": null,
                    "faxNumber": null,
                    "phoneNumber": null,
                    "twitterHandle": null,
                    "id": 0
                },
                "topics": [],
                "focus": null,
                "mediaType": {
                    "name": "Other",
                    "id": 266
                },
                "mediaTypeGroup": null,
                "address": {
                    "line1": null,
                    "line2": null,
                    "city": null,
                    "county": null,
                    "postalCode": null,
                    "country": {
                        "name": null,
                        "id": 7
                    },
                    "state": null,
                    "addressType": {
                        "name": null,
                        "id": 1
                    },
                    "isParentAddress": false,
                    "id": 0
                },
                "enrichment": {
                    "similarWebTrafficLastReceived": null,
                    "similarWebMonthlyTraffic": [],
                    "similarWebSimilarWebsitesLastReceived": null,
                    "similarWebSimilarWebsites": [],
                    "abcLastReturnReleaseDate": null,
                    "abcReportingFrequencyDescription": null,
                    "abcReturns": [],
                    "kloutLastReceived": null,
                    "kloutScore": null,
                    "kloutDeltaDay": null,
                    "kloutDeltaWeek": null,
                    "kloutDeltaMonth": null,
                    "kloutBucket": null,
                    "kredLastReceived": null,
                    "kredInfluenceScore": null,
                    "kredOutreachScore": null,
                    "mozLastReceived": null,
                    "mozSubdomainMozRankNormalised": null,
                    "mozLinks": null,
                    "mozExternalEquityLinks": null,
                    "mozPageAuthority": null,
                    "mozDomainAuthority": null,
                    "mozUrlRankNormalised": 0.0,
                    "ahrefsLastReceived": null,
                    "ahrefsRating": null
                },
                "category": {
                    "name": "Media",
                    "id": 1
                },
                "profileCodes": [],
                "showTimes": [],
                "departments": [],
                "owner": null,
                "broadcastFrequency": null,
                "visitsPerMonth": null,
                "costPerMilleAdRate": null,
                "featureLeadDays": null,
                "advertisingLeadDays": null,
                "badges": [],
                "frequencyCodes": [],
                "languages": [],
                "radioFormats": [],
                "targetAreas": [],
                "externalIdentifiers": [],
                "circulation": null,
                "audience": null,
                "monoAdRate": null,
                "colorAdRate": null,
                "sccAdRate": null,
                "channel": null,
                "showTimeException": null,
                "parent": null,
                "vuelioInfluencerRating": null,
                "contactCount": 0,
                "edCalCount": 0,
                "groupCount": 0,
                "emailDistributionCount": 0,
                "noteCount": 0,
                "linkedOutlets": {
                    "bureaux": [],
                    "shows": [],
                    "onlineVersions": [],
                    "otherOutletsInMarket": [],
                    "sisterOutlets": [],
                    "specialSections": []
                },
                "dataArea": null,
                "sourceKey": null,
                "editable": true,
                "udfCollection": {
                    "id": 0,
                    "dropdown01": {
                        "id": null,
                        "name": null
                    },
                    "dropdown02": {
                        "id": null,
                        "name": null
                    },
                    "dropdown03": {
                        "id": null,
                        "name": null
                    },
                    "dropdown04": {
                        "id": null,
                        "name": null
                    },
                    "dropdown05": {
                        "id": null,
                        "name": null
                    },
                    "dropdown06": {
                        "id": null,
                        "name": null
                    },
                    "dropdown07": {
                        "id": null,
                        "name": null
                    },
                    "dropdown08": {
                        "id": null,
                        "name": null
                    },
                    "dropdown09": {
                        "id": null,
                        "name": null
                    },
                    "dropdown10": {
                        "id": null,
                        "name": null
                    },
                    "dropdown11": {
                        "id": null,
                        "name": null
                    },
                    "dropdown12": {
                        "id": null,
                        "name": null
                    },
                    "dropdown13": {
                        "id": null,
                        "name": null
                    },
                    "dropdown14": {
                        "id": null,
                        "name": null
                    },
                    "dropdown15": {
                        "id": null,
                        "name": null
                    },
                    "checkbox01": false,
                    "checkbox02": false,
                    "checkbox03": false,
                    "checkbox04": false,
                    "checkbox05": false,
                    "checkbox06": false,
                    "checkbox07": false,
                    "checkbox08": false,
                    "checkbox09": false,
                    "checkbox10": false,
                    "checkbox11": false,
                    "checkbox12": false,
                    "checkbox13": false,
                    "checkbox14": false,
                    "checkbox15": false,
                    "textline01": null,
                    "textline02": null,
                    "textline03": null,
                    "textline04": null,
                    "textline05": null,
                    "textline06": null,
                    "textline07": null,
                    "textline08": null,
                    "textline09": null,
                    "textline10": null,
                    "textline11": null,
                    "textline12": null,
                    "textline13": null,
                    "textline14": null,
                    "textline15": null,
                    "textline16": null,
                    "textline17": null,
                    "textline18": null,
                    "textline19": null,
                    "textline20": null,
                    "textline21": null,
                    "textline22": null,
                    "textline23": null,
                    "textline24": null,
                    "textline25": null,
                    "textline26": null,
                    "textline27": null,
                    "textline28": null,
                    "textline29": null,
                    "textline30": null,
                    "textbox01": null,
                    "textbox02": null,
                    "textbox03": null,
                    "textbox04": null,
                    "textbox05": null,
                    "textbox06": null,
                    "textbox07": null,
                    "textbox08": null,
                    "textbox09": null,
                    "textbox10": null,
                    "textbox11": null,
                    "textbox12": null,
                    "textbox13": null,
                    "textbox14": null,
                    "textbox15": null,
                    "multiselect01": [],
                    "multiselect02": [],
                    "multiselect03": [],
                    "multiselect04": [],
                    "multiselect05": [],
                    "multiselect06": [],
                    "multiselect07": [],
                    "multiselect08": [],
                    "multiselect09": [],
                    "multiselect10": [],
                    "multiselect11": [],
                    "multiselect12": [],
                    "multiselect13": [],
                    "multiselect14": [],
                    "multiselect15": [],
                    "multiselect16": [],
                    "multiselect17": [],
                    "multiselect18": [],
                    "multiselect19": [],
                    "multiselect20": []
                },
                "monitoringOnly": false,
                "proprietaryData": null,
                "id": 0,
                "visibility": 0,
                "visibilityUserId": null,
                "visibilityClientId": null,
                "visibilityUserGroupIds": [],
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "udfcollectiondto",
            "blob": {
                "id": 0,
                "dropdown01": {
                    "id": null,
                    "name": null
                },
                "dropdown02": {
                    "id": null,
                    "name": null
                },
                "dropdown03": {
                    "id": null,
                    "name": null
                },
                "dropdown04": {
                    "id": null,
                    "name": null
                },
                "dropdown05": {
                    "id": null,
                    "name": null
                },
                "dropdown06": {
                    "id": null,
                    "name": null
                },
                "dropdown07": {
                    "id": null,
                    "name": null
                },
                "dropdown08": {
                    "id": null,
                    "name": null
                },
                "dropdown09": {
                    "id": null,
                    "name": null
                },
                "dropdown10": {
                    "id": null,
                    "name": null
                },
                "dropdown11": {
                    "id": null,
                    "name": null
                },
                "dropdown12": {
                    "id": null,
                    "name": null
                },
                "dropdown13": {
                    "id": null,
                    "name": null
                },
                "dropdown14": {
                    "id": null,
                    "name": null
                },
                "dropdown15": {
                    "id": null,
                    "name": null
                },
                "checkbox01": false,
                "checkbox02": false,
                "checkbox03": false,
                "checkbox04": false,
                "checkbox05": false,
                "checkbox06": false,
                "checkbox07": false,
                "checkbox08": false,
                "checkbox09": false,
                "checkbox10": false,
                "checkbox11": false,
                "checkbox12": false,
                "checkbox13": false,
                "checkbox14": false,
                "checkbox15": false,
                "textline01": null,
                "textline02": null,
                "textline03": null,
                "textline04": null,
                "textline05": null,
                "textline06": null,
                "textline07": null,
                "textline08": null,
                "textline09": null,
                "textline10": null,
                "textline11": null,
                "textline12": null,
                "textline13": null,
                "textline14": null,
                "textline15": null,
                "textline16": null,
                "textline17": null,
                "textline18": null,
                "textline19": null,
                "textline20": null,
                "textline21": null,
                "textline22": null,
                "textline23": null,
                "textline24": null,
                "textline25": null,
                "textline26": null,
                "textline27": null,
                "textline28": null,
                "textline29": null,
                "textline30": null,
                "textbox01": null,
                "textbox02": null,
                "textbox03": null,
                "textbox04": null,
                "textbox05": null,
                "textbox06": null,
                "textbox07": null,
                "textbox08": null,
                "textbox09": null,
                "textbox10": null,
                "textbox11": null,
                "textbox12": null,
                "textbox13": null,
                "textbox14": null,
                "textbox15": null,
                "multiselect01": [],
                "multiselect02": [],
                "multiselect03": [],
                "multiselect04": [],
                "multiselect05": [],
                "multiselect06": [],
                "multiselect07": [],
                "multiselect08": [],
                "multiselect09": [],
                "multiselect10": [],
                "multiselect11": [],
                "multiselect12": [],
                "multiselect13": [],
                "multiselect14": [],
                "multiselect15": [],
                "multiselect16": [],
                "multiselect17": [],
                "multiselect18": [],
                "multiselect19": [],
                "multiselect20": []
            }
        },
        {
            "name": "userdto",
            "blob": {
                "deleted": false,
                "name": null,
                "emailAddress": null,
                "firstName": null,
                "middleName": null,
                "lastName": null,
                "password": null,
                "passwordHash": null,
                "roles": [],
                "client": {
                    "name": null,
                    "id": 0
                },
                "userGroups": [],
                "setInactive": false,
                "id": 0,
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00",
                "createdUser": null,
                "modifiedUser": null
            }
        },
        {
            "name": "usergroupdto",
            "blob": {
                "id": 0,
                "deleted": false,
                "name": null
            }
        },
        {
            "name": "userroledto",
            "blob": {
                "deleted": false,
                "roleDto": {
                    "name": 0,
                    "id": 0,
                    "created": null,
                    "modified": null
                },
                "id": 0
            }
        },
        {
            "name": "usersocialmediaaccesstokendto",
            "blob": {
                "deleted": false,
                "userDto": {
                    "deleted": false,
                    "name": null,
                    "emailAddress": null,
                    "firstName": null,
                    "middleName": null,
                    "lastName": null,
                    "password": null,
                    "passwordHash": null,
                    "roles": [],
                    "client": {
                        "name": null,
                        "id": 0
                    },
                    "userGroups": [],
                    "setInactive": false,
                    "id": 0,
                    "created": "0001-01-01T00:00:00",
                    "modified": "0001-01-01T00:00:00",
                    "createdUser": null,
                    "modifiedUser": null
                },
                "socialMediaTypeDto": null,
                "token": null,
                "secret": null,
                "screenName": null,
                "id": 0
            }
        },
        {
            "name": "userusergroupdto",
            "blob": {
                "id": 0,
                "deleted": false,
                "userGroup": {
                    "id": 0,
                    "deleted": false,
                    "name": null
                }
            }
        },
        {
            "name": "contactpositionkendodto",
            "blob": {
                "id": 0,
                "position": null,
                "contactPositionType_Name": null,
                "contactPositionType_Id": 0,
                "contact_Name": null,
                "contact_Id": 0,
                "contact_Communication_PhoneNumber": null,
                "contact_Communication_EmailAddress": null,
                "recordType": 1,
                "startDate": null,
                "endDate": null
            }
        },
        {
            "name": "emaildistributionbyrecipientkendodto",
            "blob": {
                "id": 0,
                "emailDistribution_Id": 0,
                "emailDistribution_Status": 0,
                "emailDistribution_Visibility": 0,
                "emailDistribution_Release_Id": 0,
                "emailDistribution_Release_Name": null,
                "emailDistribution_Release_Headline": null,
                "emailDistribution_Release_DisplayDateTime": null,
                "emailDistribution_Release_ScheduledDateTime": null,
                "notSentOptedOut": false,
                "sent": false,
                "softBounce": false,
                "hardBounce": false,
                "opened": false,
                "clicked": false,
                "spamReport": false,
                "unsubscribed": false
            }
        },
        {
            "name": "emaildistributionrecipientkendodto",
            "blob": {
                "id": 0,
                "entityType": 0,
                "entityTypeName": "",
                "entityId": null,
                "status": null,
                "avatarUrl": null,
                "emailAddress": null,
                "name": null,
                "outletId": null,
                "outletAvatarUrl": null,
                "contact_Outlet_Name": null,
                "notSentOptedOut": false,
                "sent": false,
                "softBounce": false,
                "hardBounce": false,
                "opened": false,
                "clicked": false,
                "spamReport": false,
                "unsubscribed": false
            }
        },
        {
            "name": "entityshoppingcartcontactkendodto",
            "blob": {
                "deleted": false,
                "id": 0,
                "contactId": 0,
                "contact_Name": null,
                "contact_Title": null,
                "contact_Outlet_Name": null,
                "contact_Outlet_MediaType_Name": null,
                "visibility": 0
            }
        },
        {
            "name": "entityshoppingcartoutletkendodto",
            "blob": {
                "deleted": false,
                "id": 0,
                "outletId": 0,
                "outlet_Name": null,
                "outlet_FullName": null,
                "outlet_MediaType_Name": null,
                "visibility": 0
            }
        },
        {
            "name": "interactioncontactkendodto",
            "blob": {
                "id": 0,
                "contact_Name": null,
                "contact_Id": 0,
                "contact_Outlet_Name": null,
                "contact_Outlet_Id": 0,
                "contact_Communication_PhoneNumber": null,
                "contact_Communication_EmailAddress": null,
                "status_Name": null,
                "status_Id": 0,
                "recordType": 1,
                "visibility": 0
            }
        },
        {
            "name": "interactionkendodto",
            "blob": {
                "id": 0,
                "name": null,
                "interactionType_Name": null,
                "interactionDateTime": "0001-01-01T00:00:00",
                "visibility": 0,
                "status_Name": null,
                "status_Id": null,
                "createdUser_Name": null,
                "createdUser_Id": 0,
                "created": "0001-01-01T00:00:00",
                "modified": "0001-01-01T00:00:00"
            }
        },
        {
            "name": "politicalcontactperspectivekendodto",
            "blob": {
                "party_Name": null,
                "constituency_Name": null,
                "euGroup_Name": null,
                "majority": null,
                "otherSeatsHeld": null,
                "firstElected": null,
                "name": null,
                "salutation": null,
                "displayName": null,
                "title": null,
                "topicList": null,
                "outlet_Id": 0,
                "outlet_Name": null,
                "outlet_FullName": null,
                "outlet_Communication_PhoneNumber": null,
                "outlet_Communication_EmailAddress": null,
                "outlet_Communication_TwitterHandle": null,
                "outlet_Communication_TwitterUrl": null,
                "outlet_Communication_MainHomepage": null,
                "outlet_Communication_AvatarUrl": null,
                "communication_PhoneNumber": null,
                "communication_EmailAddress": null,
                "communication_TwitterHandle": null,
                "communication_TwitterUrl": null,
                "communication_FacebookUrl": null,
                "communication_LinkedInUrl": null,
                "communication_GooglePlusUrl": null,
                "communication_InstagramUrl": null,
                "communication_PinterestUrl": null,
                "communication_YouTubeUrl": null,
                "communication_MainHomepage": null,
                "communication_AvatarUrl": null,
                "outlet_TopicList": null,
                "outlet_Focus_Name": null,
                "outlet_MediaType_Name": null,
                "deleted": false,
                "address_Line1": null,
                "address_Line2": null,
                "address_City": null,
                "address_County": null,
                "address_PostalCode": null,
                "address_Country_Name": null,
                "desk_Id": null,
                "desk_Name": null,
                "vuelioInfluencerRating": null,
                "id": 0,
                "visibility": 0,
                "recordType": 1
            }
        },
        {
            "name": "politicalkendoazdto",
            "blob": {
                "name": null,
                "jobTitle": null,
                "email": null,
                "phone": null,
                "outletId": null,
                "outletName": null,
                "id": 0,
                "recordType": 0,
                "partyName": null,
                "constituencyName": null,
                "modeOfAddress": null,
                "honorificName": null,
                "maritalStatusName": null,
                "family": null,
                "twitterUrl": null,
                "homepage": null,
                "avatarUrl": null
            }
        },
        {
            "name": "releasekendodto",
            "blob": {
                "name": null,
                "headline": null,
                "scheduledDateTime": null,
                "displayDateTime": null,
                "startDateTime": null,
                "endDateTime": null,
                "visibility": 0,
                "id": 0
            }
        },
        {
            "name": "groupentitykendoazdto",
            "blob": {
                "id": 0,
                "name": null,
                "jobTitle": null,
                "phone": null,
                "email": null,
                "twitterHandle": null,
                "twitterUrl": null,
                "facebookUrl": null,
                "linkedInUrl": null,
                "googlePlusUrl": null,
                "instagramUrl": null,
                "pinterestUrl": null,
                "youTubeUrl": null,
                "homepage": null,
                "avatarUrl": null,
                "focusName": null,
                "mediaTypeName": null,
                "addressLine1": null,
                "addressLine2": null,
                "city": null,
                "county": null,
                "postalCode": null,
                "countryName": null,
                "vuelioInfluencerRating": null,
                "outletId": 0,
                "outletName": null,
                "outletAvatarUrl": null,
                "recordType": 0,
                "visibility": 0
            }
        },
        {
            "name": "groupkendoazdto",
            "blob": {
                "name": null,
                "modified": "0001-01-01T00:00:00",
                "countContacts": null,
                "countOutlets": null,
                "countTotal": null,
                "id": 0,
                "shortId": null,
                "visibility": 0,
                "isTargetOutletGroup": false,
                "modifiedUserName": null
            }
        },
        {
            "name": "groupentitykendodto",
            "blob": {
                "deleted": false,
                "entityId": 0,
                "name": null,
                "title": null,
                "email": null,
                "phoneNumber": null,
                "entityType": 0,
                "twitterHandle": null,
                "twitterUrl": null,
                "linkedInUrl": null,
                "facebookUrl": null,
                "googlePlusUrl": null,
                "instagramUrl": null,
                "pinterestUrl": null,
                "youTubeUrl": null,
                "avatarUrl": null,
                "mediaType": null,
                "homePage": null,
                "focus": null,
                "topicList": null,
                "address_Line1": null,
                "address_Line2": null,
                "address_City": null,
                "address_County": null,
                "address_PostalCode": null,
                "address_Country_Name": null,
                "outletId": 0,
                "outletName": null,
                "outletTwitterHandle": null,
                "outletAvatarUrl": null,
                "outletEmail": null,
                "outletPhoneNumber": null,
                "outletHomePage": null,
                "entityTypeName": "Outlet",
                "viewUrl": "#outlet-view/0",
                "id": 0
            }
        },
        {
            "name": "clientkendodto",
            "blob": {
                "name": null,
                "users": 0,
                "vuelioSuffix": null,
                "deleted": false,
                "dataArea_Id": 0,
                "dataArea_Name": null,
                "sourceKey": null,
                "id": 0
            }
        },
        {
            "name": "contactkendodto",
            "blob": {
                "name": null,
                "salutation": null,
                "displayName": null,
                "title": null,
                "topicList": null,
                "outlet_Id": 0,
                "outlet_Name": null,
                "outlet_FullName": null,
                "outlet_Communication_PhoneNumber": null,
                "outlet_Communication_EmailAddress": null,
                "outlet_Communication_TwitterHandle": null,
                "outlet_Communication_TwitterUrl": null,
                "outlet_Communication_MainHomepage": null,
                "outlet_Communication_AvatarUrl": null,
                "communication_PhoneNumber": null,
                "communication_EmailAddress": null,
                "communication_TwitterHandle": null,
                "communication_TwitterUrl": null,
                "communication_FacebookUrl": null,
                "communication_LinkedInUrl": null,
                "communication_GooglePlusUrl": null,
                "communication_InstagramUrl": null,
                "communication_PinterestUrl": null,
                "communication_YouTubeUrl": null,
                "communication_MainHomepage": null,
                "communication_AvatarUrl": null,
                "outlet_TopicList": null,
                "outlet_Focus_Name": null,
                "outlet_MediaType_Name": null,
                "deleted": false,
                "address_Line1": null,
                "address_Line2": null,
                "address_City": null,
                "address_County": null,
                "address_PostalCode": null,
                "address_Country_Name": null,
                "desk_Id": null,
                "desk_Name": null,
                "vuelioInfluencerRating": null,
                "id": 0,
                "visibility": 0,
                "recordType": 1
            }
        },
        {
            "name": "edcalkendodto",
            "blob": {
                "description": null,
                "name": null,
                "issueDate": "0001-01-01T00:00:00",
                "deadlineDate": null,
                "issue": null,
                "outlet_Name": null,
                "outlet_FullName": null,
                "contact_Name": null,
                "sectionName": null,
                "topicList": null,
                "id": 0,
                "outlet_Communication_TwitterHandle": null,
                "outlet_Communication_AvatarUrl": null,
                "outlet_Address_Country_Name": null
            }
        },
        {
            "name": "groupkendodto",
            "blob": {
                "name": null,
                "modified": "0001-01-01T00:00:00",
                "entitiesCount": 0,
                "id": 0,
                "visibility": 0
            }
        },
        {
            "name": "outletkendodto",
            "blob": {
                "name": null,
                "fullName": null,
                "communication_MainHomepage": null,
                "communication_PhoneNumber": null,
                "communication_EmailAddress": null,
                "communication_TwitterUrl": null,
                "communication_FacebookUrl": null,
                "communication_LinkedInUrl": null,
                "communication_GooglePlusUrl": null,
                "communication_InstagramUrl": null,
                "communication_PinterestUrl": null,
                "communication_YouTubeUrl": null,
                "communication_TwitterHandle": null,
                "communication_AvatarUrl": null,
                "mediaType_Name": null,
                "focus_Name": null,
                "topicList": null,
                "deleted": false,
                "address_Line1": null,
                "address_Line2": null,
                "address_City": null,
                "address_County": null,
                "address_PostalCode": null,
                "address_Country_Name": null,
                "vuelioInfluencerRating": null,
                "visitsPerMonth": null,
                "circulation": null,
                "id": 0
            }
        },
        {
            "name": "userkendodto",
            "blob": {
                "id": 0,
                "name": null,
                "userName": null,
                "client_Name": null,
                "deleted": false
            }
        },
        {
            "name": "categorykendodto",
            "blob": {
                "name": null,
                "description": null,
                "entries": 0,
                "deleted": false,
                "id": 0
            }
        },
        {
            "name": "dmsdirectoryrenamedto",
            "blob": {
                "fullSourceKey": null,
                "newDirectoryName": null
            }
        },
        {
            "name": "docfromclientdto",
            "blob": {
                "fileName": null,
                "size": 0,
                "base64Data": null,
                "folderPath": null,
                "title": null,
                "description": null,
                "tags": null
            }
        }
    ];

    if (!endsWith(templateName, 'dto')) {
        templateName += 'dto';
    }

    templateName = templateName.toLowerCase();

    const blob: T = all.filter(a => a.name === templateName)[0].blob as any;

    return blob;
}
