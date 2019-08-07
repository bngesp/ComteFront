import { Injectable } from '@angular/core';
import { SERVER_API_URL } from 'src/app/app.constants';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ICompte } from "./compte.model";
import * as moment from 'moment';


type EntityResponseType = HttpResponse<ICompte>
type EntityArrayResponseType = HttpResponse<ICompte[]>;

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private comptes: any;
  private token: String;
  public resourceUrl = SERVER_API_URL + 'api/comptes';

  constructor(protected http: HttpClient) {}

  hasToken(){
    return this.token === null;
  }

  setToken(token:String){
    this.token = token;
  }

  getAllCompteFromBackend(token?: String){
    if(token != null) {
      console.log("lay ton token est null deh "+token);
      this.setToken(token); 
    }
    ///var hea = new HttpHeaders(
    var headers_object = new HttpHeaders({ 'Content-Type': 'application/json' });
    headers_object.append('Authorization', 'Baerer ' +token);
    console.log(headers_object);
    const httpOptions = {
      headers: headers_object
    };
    return this.http.get<ICompte>(
      this.resourceUrl, httpOptions
    ).subscribe(
      data => {
        console.log(data)
      }
    )
  }

//   create(compte: ICompte): Observable<EntityResponseType> {
//     const copy = this.convertDateFromClient(compte);
//     return this.http
//         .post<ICompte>(this.resourceUrl, copy, { observe: 'response' })
//         .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
// }

//   update(compte: ICompte): Observable<EntityResponseType> {
//       const copy = this.convertDateFromClient(compte);
//       return this.http
//           .put<ICompte>(this.resourceUrl, copy, { observe: 'response' })
//           .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
//   }

//   find(id: number): Observable<EntityResponseType> {
//       return this.http
//           .get<ICompte>(`${this.resourceUrl}/${id}`, { observe: 'response' })
//           .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
//   }

//   query(req?: any): Observable<EntityArrayResponseType> {
//       const options = this.createRequestOption(req);
//       return this.http
//           .get<ICompte[]>(this.resourceUrl, { params: options, observe: 'response' })
//           .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
//   }

//   delete(id: number): Observable<HttpResponse<any>> {
//       return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
//   }

//   protected convertDateFromClient(compte: ICompte): ICompte {
//       const copy: ICompte = Object.assign({}, compte, {
//           date_creation: compte.date_creation != null && compte.date_creation.isValid() ? compte.date_creation.toJSON() : null
//       });
//       return copy;
//   }

//   protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
//       if (res.body) {
//           res.body.date_creation = res.body.date_creation != null ? moment(res.body.date_creation) : null;
//       }
//       return res;
//   }

//   protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
//       if (res.body) {
//           res.body.forEach((compte: ICompte) => {
//               compte.date_creation = compte.date_creation != null ? moment(compte.date_creation) : null;
//           });
//       }
//       return res;
//   }


//   protected createRequestOption(req?: any): HttpParams {
//     let options: HttpParams = new HttpParams();
//     if (req) {
//         Object.keys(req).forEach(key => {
//             if (key !== 'sort') {
//                 options = options.set(key, req[key]);
//             }
//         });
//         if (req.sort) {
//             req.sort.forEach(val => {
//                 options = options.append('sort', val);
//             });
//         }
//     }
//     return options;
// };



}
