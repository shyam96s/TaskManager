import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IEmployee} from '../modeles/players';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public _url = "/assets/data/players.json";

  constructor(private http: HttpClient) { }
  getPlayers(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}
