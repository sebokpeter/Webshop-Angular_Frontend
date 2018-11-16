import { Injectable } from '@angular/core';
import { Beer } from '../../models/beer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BeerService {


  constructor(private http: HttpClient) {
  }

  getBeers() : Observable<Beer[]> {
    return  this.http.get<Beer[]>(environment.apiUrl + 'beers');
  }

  getBeerByID(inId: number) : Observable<Beer> {
    return this.http.get<Beer>(environment.apiUrl + 'beers/' + inId);
  }

  addBeer(beer: Beer): Observable<Beer> {
    return this.http.post<Beer>(environment.apiUrl, beer);
  }

  updateBeer(product: Beer): Observable<Beer>{
    const id = product.id;
    return this.http.put<Beer>(environment.apiUrl + 'beers/' + id, product);
  }

  deleteBeer(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + 'beers/' + id);
  }
}