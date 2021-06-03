import { Component, OnInit, Input } from '@angular/core';
import { SpinnerService } from './spinner.service';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  loading: boolean;
  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerService.loading.asObservable().subscribe(x => this.loading = x);
 }
}
