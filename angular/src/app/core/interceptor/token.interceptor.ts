import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from 'oidc-client';
import { switchMap } from 'rxjs/operators';
import { BaseService } from '../../shared/service/base-service/base.service';

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
    constructor(private baseService: BaseService) { }

    /**
     * Adding Bearer Token to HttpRequest header
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.baseService.getCurrentUserValue())
            .pipe(
                switchMap((token: User) => {
                    const headers = request.headers
                        .set('Authorization', 'Bearer ' + token.access_token)
                        .append('Content-Type', 'application/json');
                    const requestClone = request.clone({
                        headers
                    });
                    return next.handle(requestClone);
                })
            );
    }
}
