import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';


@Pipe({
  name: 'dateTimeFormat'
})

// Converting Date Time into UTC or Time Zone of User system.
// if isUTCFormat is true then system will display UTC format or it displays Time Zone of User system.
export class DateTimeFormatPipe extends DatePipe implements PipeTransform {

  transform(value: any, userSettingInfo: any): any {
    if (userSettingInfo.DisplayTimeZoneInUTC) {
      const date = new Date(value);
      const localOffset = date.getTimezoneOffset() * 60000;
      const utcTime = date.getTime() + localOffset;
      date.setTime(utcTime); // setting UTC time
      return super.transform(date, userSettingInfo.DateFomat);
    } else {
      return super.transform(value, userSettingInfo.DateFomat);
    }
  }
}
