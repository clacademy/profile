import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

class PagingFilter {
    constructor(
        public pageIndex: number = 0,
        public pageSize: number = 10,
        public sortDirection: string = '',
        public sortName: string = '',
    ) { }
}
interface PagingResult<T> {
    totalRowCount?: number;
    pagingResult: T;
}
abstract class ServiceBase {

    constructor(protected http: HttpClient) {
    }
    protected toApiUrl(uri: any): any {
        return `${environment.apiBaseUrl}${uri}`;
    }
}
class GridHeader {
    field: string;
    header: string;
}

class DropdownModel {
    id: number;
    name: string;
}
export { PagingFilter, PagingResult, ServiceBase, GridHeader, DropdownModel };
