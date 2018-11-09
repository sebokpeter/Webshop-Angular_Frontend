import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/shared/services/beer-service/beer.service';
import { Beer } from 'src/app/shared/models/beer';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor(private beerService:BeerService,
              private router: Router) { }

  productForm = new FormGroup({
    name: new FormControl(''),
    brand: new FormControl(''),
    percentage: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl('')
  })

  ngOnInit() {
  }

  save() {
    const product = this.productForm.value;

    this.beerService.addBeer(product).subscribe(() => {
      this.router.navigateByUrl('/products');
    })
  }

}
