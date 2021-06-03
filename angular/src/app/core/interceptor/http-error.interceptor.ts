import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SpinnerService } from '../spinner/spinner.service';
import { ToasterService } from '../toaster/toaster';
import { Constants } from '../constants/constants';
import { EmitService } from '../emits-service/emit';



@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private alertService: ToasterService,
    private spinnerService: SpinnerService,
    private emitService: EmitService,
  ) { }

  /**
   * handling HTTP Error Response
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError(res => {
          this.alertService.clear();
          this.spinnerService.hide();
          switch (true) {

            case res.error instanceof ErrorEvent: {
              this.alertService.showError();
              return of(res);
            }
            case res.status >= 500: {
              this.emitService.sendChangeEvent({ control: Constants.control.popUpClose, value: true });
              this.router.navigate(['/500']);
              return of(res);
            }
            case res.status === 400: {
              // if response having error message then we need to display that message or else default message
              if (res.error) {
                this.alertService.showError(res.error);
              }
              else {
                this.alertService.showError(Constants.common.errorSummary);
              }
              return of(res);
            }
            case res.status === 404: {
              this.emitService.sendChangeEvent({ control: Constants.control.popUpClose, value: true });
              this.router.navigate(['/404']);
              return of(res);
              break;
            }
            case res.status === 403: {
              this.alertService.showError(Constants.common.forbiddenSummary);
              return of(res);
            }
            case res.status === 401: {
              this.alertService.showError(Constants.common.unauthorized);
              return of(res);
            }
            case res.status === 405: {
              this.alertService.showError(Constants.common.forbiddenSummary);
              return of(res);
            }
            case res.status === 0: {
              this.emitService.sendChangeEvent({ control: Constants.control.popUpClose, value: true });
              this.router.navigate(['/404']);
              return of(res);
            }
            case !navigator.onLine: {
              this.emitService.sendChangeEvent({ control: Constants.control.popUpClose, value: true });
              this.router.navigate(['/no-internet']);
              return of(res);
            }
            default: {
              this.alertService.showError(res);
              return of(res);
            }
          }
        }));
  }
}
