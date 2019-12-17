import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse,HttpParams,HttpClientModule,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {cda} from './cda';
import {cdaRequest} from './cdaRequest';


const localUrl = 'assets/data/cda2.json';
const postURL = 'https://pulits.pythonanywhere.com/getspeip';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MensajesService {


  getCDA(): Observable<HttpResponse<cda[]>> {
    return this.http.get<cda[]>(
      localUrl, { observe: 'response' });
  }

  getCDAById(id: any): Observable<any> {
    return this.http.get<cda>(localUrl + '/'+id);
  }

  searchCDA (data: cdaRequest): Observable<cda> {
    return this.http.post<cda>(postURL, data, httpOptions)
      /* .pipe(
        catchError(this.handleError('addHero', hero))
      ) */;
  }
  

  constructor(private http: HttpClient) { }
}
