import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/shared/services/beer-service/beer.service';
import { Beer } from 'src/app/shared/models/beer';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  constructor(private beerService: BeerService) { }

  products: Beer[];

  ngOnInit() {
    this.refresh();
  }

  delete(id: number) {
    this.beerService.deleteBeer(id).subscribe(message => {
      this.refresh();
    });
  }

  refresh(){
    this.beerService.getBeers().subscribe(listOfProducts => {
      this.products = listOfProducts;
    });
  }
}
