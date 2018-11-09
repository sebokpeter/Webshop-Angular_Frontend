import { Injectable } from '@angular/core';
import { Beer } from '../../models/beer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  apiUrl = "https://ipcsmmd-webshop-group16.azurewebsites.net/api/beers";

  constructor(private http: HttpClient) {
  }

  getBeers() : Observable<Beer[]> {
    return  this.http.get<Beer[]>(this.apiUrl);
  }

  getBeerByID(inId: number) : Observable<Beer> {
    return this.http.get<Beer>(this.apiUrl + '/' + inId);
  }

  addBeer(beer: Beer): Observable<Beer> {
    return this.http.post<Beer>(this.apiUrl, beer);
  }

  updateBeer(product: Beer): Observable<Beer>{
    const id = product.id;
    return this.http.put<Beer>(this.apiUrl + '/' + id, product);
  }

  deleteBeer(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}