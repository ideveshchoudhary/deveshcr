// import { Injectable } from '@angular/core';
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable()
// export class AuthInterceptorService implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = '084f2df6319f2729c860fd3d1393840e41f56f00';
//     if (token) {
//       const cloned = req.clone({
//         headers: req.headers.set('Authorization', `Bearer ${token}`)
//       });
//       return next.handle(cloned);
//     } else {
//       return next.handle(req);
//     }
//   }
// }