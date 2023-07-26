// import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { LoginService } from "./login.service";
// import { Injectable } from "@angular/core";

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor{

//     constructor(private loginService : LoginService) { };
//     intercept(
//         req: HttpRequest<any>,
//          next: HttpHandler): Observable<HttpEvent<any>>
//           {
//             let authReq = req;
//             const token = this.loginService.getToken();
//         console.log("intercept mai hai abhi hum ");;
//             if (token != null) {
//               authReq = authReq.clone({
//                 setHeaders: { Authorization: `Bearer ${token}` },
//               });
//             }
//             return next.handle(authReq);
          
//           }
    
// }


// export const authInterceptorProvider = [
//     {
//       provide: HTTP_INTERCEPTORS,
//       useClass: AuthInterceptor,
//       multi: true,
//     },
//   ];


import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HTTP_INTERCEPTORS,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { LoginService } from './login.service';
  
  @Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private loginService: LoginService) {}
  
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
      let authReq = req;
    //   const token = this.loginService.getToken();
    let token = localStorage.getItem('token');
      console.log("Token fron interceptor", token);
  
      if (token != null) {
        authReq = authReq.clone({
          setHeaders: { Authorization: `Bearer ${token}` }
          
        });

      }
      console.log("Auth Header " ,authReq);
      return next.handle(authReq);
    }
  }
  export const authInterceptorProvider = [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ];