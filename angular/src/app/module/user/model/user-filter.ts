import { PagingFilter } from '../../../shared/model/common-models';

class UserFilter extends PagingFilter {
    constructor(
        public searchText: string = '',
    ) {
        super();
    }
}

export { UserFilter };
