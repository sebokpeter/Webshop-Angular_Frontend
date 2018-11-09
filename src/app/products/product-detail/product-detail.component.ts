import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/shared/services/beer-service/beer.service';
import { Beer } from 'src/app/shared/models/beer';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private beerServiece : BeerService,
    private route: ActivatedRoute,
    ) { }

  currentBeer: Beer;

  ngOnInit() {
    this.getBeer();
  }

  getBeer(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.beerServiece.getBeerByID(id).subscribe(beer => this.currentBeer = beer);
  }
}
