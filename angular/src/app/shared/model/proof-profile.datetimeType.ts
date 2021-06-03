import { ProofProfileBase } from './prof-profile.base';


export class DateTimeType extends ProofProfileBase<string> {
  controlType = 'datetime';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    // tslint:disable-next-line:no-string-literal
    this.type = options['type'] || '';
  }
}
