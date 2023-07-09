import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UiService } from './ui.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  isbrowser: boolean = false;
  constructor(
    private _authService: AuthService,
    private router: Router,
    private toastService: ToastrService,
    // private netService: OnlineStatusService,
    @Inject(PLATFORM_ID) plateformId: any
  ) {
    if (isPlatformBrowser(plateformId)) this.isbrowser = true;
    // if (this.isbrowser) {
    //   if (this.netService.getStatus() == OnlineStatusType.OFFLINE) {
    //     this.toastService.info('Please check your internet connection.');
    //   }
    // }
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this._authService.getAuthToken();

    request = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });

    // if (!token?.length) this.router.navigate(['/']);

    return next.handle(request).pipe(
      map((event) => {
        // if (event instanceof HttpResponse)
        return event;
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status == 401) {
          this._authService.logout();
        }

        if (err.status >= 500) {
          this.router.navigate(['/error'], {
            queryParams: { message: err.error.message },
          });
        }

        // if (err.status < 500) {
        //   this.toastService.error(err.error.message, 'Alert');
        // }

        return throwError(() => err);
      })
    );
  }
}
