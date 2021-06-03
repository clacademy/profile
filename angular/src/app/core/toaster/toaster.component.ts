import { Component, OnInit } from '@angular/core';
import { ToasterService, ToasterObj } from './toaster.service';
import { MessageService } from '../../core/prime-modules/prime';


@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {

  constructor(private toasterService: ToasterService, private messageService: MessageService) { }

  ngOnInit() {
    this.toasterService.toaster.asObservable().subscribe((res: ToasterObj) => {
      if (res.isClear === true) { this.clear(); }
      if (res.severity) {
        this.messageService.add({ severity: res.severity, summary: res.summary, detail: res.detail });
      }
    });
  }
  clear() { this.messageService.clear(); }
}
