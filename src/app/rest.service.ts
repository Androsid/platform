import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Model } from './model';
import { Configuration } from './configuration';

const endpoint = 'http://95.163.215.214/restapi/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {
  protected endpoint = 'http://192.168.37.176:8089/model/v0.1';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();

  constructor(private http: HttpClient, @Optional() configuration: Configuration) {
    if (endpoint) {
    this.endpoint = endpoint;
}
if (configuration) {
    this.configuration = configuration;
    this.endpoint = endpoint || configuration.basePath || this.endpoint;
} }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  /* getModels(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'token':'1'
      })
    };
    return this.http.get(endpoint + 'models', httpOptions).pipe(
      map(this.extractData));
  } */
  public getModels(token: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Model>>;
  public getModels(token: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Model>>>;
  public getModels(token: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Model>>>;
  public getModels(token: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
      if (token === null || token === undefined) {
          throw new Error('Required parameter token was null or undefined when calling getModels.');
      }

      let headers = this.defaultHeaders;
      if (token !== undefined && token !== null) {
          headers = headers.set('token', String(token));
      }

      // to determine the Accept header
      let httpHeaderAccepts: string[] = [
          'application/json'
      ];
      let httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
      if (httpHeaderAcceptSelected != undefined) {
          headers = headers.set("Accept", httpHeaderAcceptSelected);
      }

      // to determine the Content-Type header
      let consumes: string[] = [
          'application/json'
      ];

      return this.http.get<Array<Model>>(`${this.endpoint}/models`,
          {
              withCredentials: this.configuration.withCredentials,
              headers: headers,
              observe: observe,
              reportProgress: reportProgress
          }
      );
  }



  getModelsObjects(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'token':'1'
      })
    };
    return this.http.get(endpoint + 'models/' + id + '/objects',httpOptions).pipe(
      map(this.extractData));
  }

  getObjectsOfModelsObjects(id, objid): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'token':'1'
      })
    };
    return this.http.get(endpoint + 'models/' + id + '/objects/' + objid + '/objects',httpOptions).pipe(
      map(this.extractData));
  }

  
  addProduct (product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + 'products', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }
  
  updateProduct (id, product): Observable<any> {
    return this.http.put(endpoint + 'products/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  
  deleteProduct (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'products/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
