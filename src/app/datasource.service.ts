import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Deputado} from "./model/model";

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {

  private readonly url = "https://dadosabertos.camara.leg.br/api/v2/deputados"

  //https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome

  constructor(private http: HttpClient) {
  }

  getDeputados(): Observable<Deputado> {
    return this.http.get<Deputado>(this.url+"?itens=50&ordem=ASC&ordenarPor=nome")
      .pipe(
        catchError(error => {
          console.error('Erro na solicitação:', error);
          return throwError(error);
        })
      );
  }


}
