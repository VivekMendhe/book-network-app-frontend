import { HttpEvent, HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

// export const httpTokenInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

export const httpTokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const tokenService = inject(TokenService);
  const token = tokenService.token;

  if (token) {
    const authReq = req.clone({
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    });
    return next(authReq);
  }

  return next(req);
};