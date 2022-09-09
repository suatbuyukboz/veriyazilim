import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetRequest,MainResponse } from '../_models/all.model';


@Injectable()
export class HttpProviders {
  header!: HttpHeaders;

  baseUrl: string = 'https://smarty.kerzz.com:4004/api/mock/getFeed';

  constructor(private http: HttpClient) {
    this.setHeader();
  }

  setHeader() {
    this.header = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('apiKey', 'bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2')
      .set('Content-Type', 'application/json');
  }

  GetFeed(model: GetRequest) {
    this.setHeader();
    return this.http
      .post<MainResponse>(this.baseUrl, model, {
        headers: this.header,
      })
      .pipe(
        map((data: MainResponse) => {
          return data;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

}
