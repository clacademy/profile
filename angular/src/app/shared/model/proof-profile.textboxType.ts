import { ProofProfileBase } from './prof-profile.base';

export class TextboxType extends ProofProfileBase<string> {
  // controlType = 'textbox';
  controlType: string;
  type: string;

  constructor(options: {} = {}) {
    super(options);
    // tslint:disable-next-line:no-string-literal
    this.type = options['type'] || '';
    // tslint:disable-next-line: no-string-literal
    this.controlType = options['type'] || '';
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/