
export class SessionHelper {

    private static _refreshGrid = false;

    static getRefreshGrid() {
        let refreshGrid = this._refreshGrid;
        this._refreshGrid = false;
        return refreshGrid;
    }

    static setRefreshGrid(truthy: boolean) {
        this._refreshGrid = truthy;
    }

};