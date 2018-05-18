import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiqueryServiceProvider {

  constructor(private _http: Http) { }

  public getDefinitions(id: number): Observable<any> {
    const query = this._http.get(GLOBAL.url + "?a=Definitions/GetAllByDictionaryId&id=" + id, { headers: new Headers({
      "Content-Type": 'application/json'
    })}).map(res => res.json());

    return Observable.create((observer) => {
      query.subscribe(
        Response => {
          console.log(Response);
          if (Response.Success) {
            observer.next(Response);
          } else {
            observer.error(Response);
          }
        }, error => {
          observer.error(error);
        }
      );
    });
  }

}