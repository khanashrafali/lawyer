import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { catchError, map } from "rxjs/operators";
import { UiService } from "./ui.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private uiService: UiService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const AuthData = this.authService.getAuthData;

    request = request.clone({
      headers: request.headers.set(
        "Authorization",
        `Bearer ${AuthData?.token}`
      ),
    });

    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status >= 500) {
          this.router.navigate(["/error"], {
            queryParams: { message: err.error.message },
          });
        }

        if (err.status == 401) {
          this.router.navigate(["/login"]);
        }

        if (err.status < 500) {
          this.uiService.openSnackbar(err.error.message);
        }

        return throwError(err);
      })
    );
  }
}
