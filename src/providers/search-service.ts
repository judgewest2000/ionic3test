import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { DataAccessService } from './data-access-service';

interface SearchRequestDefinition {
    showClientOnly: boolean;
    searchText: string;
    take: number;
    skip: number;
    page: number;
    pageSize: number;
    sort: SortField[];
    fieldDataTypes: {
        fieldName: string;
        fieldDataType: string;
    }[];
}

export interface SortField {
    field: string;
    dir: 'asc'|'desc';
}

export interface SearchRequest {
    endPoint: string;
    searchText: string;
    sortField?: SortField
}

export interface SearchResult<T> {
    count: number;
    errors: any;
    data: T[]
}

@Injectable()
export class SearchService {

    constructor(private http: Http, private dataAccessService: DataAccessService) {
    }

    private constructSearchRequestDefinition(searchRequest: SearchRequest) {
        const d: SearchRequestDefinition = {
            showClientOnly: false,
            searchText: searchRequest.searchText,
            sort: [],
            take: 50,
            skip: 0,
            page: 0,
            pageSize: 50,
            fieldDataTypes: []
        };

        if (searchRequest.sortField !== undefined) {
            d.sort.push(searchRequest.sortField);
        }

        return d;
    }

    async search<T>(searchRequest: SearchRequest) {
        const searchDefinition = this.constructSearchRequestDefinition(searchRequest);

        const result = await this.dataAccessService.post<SearchResult<T>>(searchRequest.endPoint, searchDefinition);

        return result;
    }

}
