import { Component, OnInit } from '@angular/core';
import { BeerService } from 'src/app/shared/services/beer-service/beer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Beer } from 'src/app/shared/models/beer';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(
    private beerService : BeerService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  id: number;  



  productForm = new FormGroup({
    name: new FormControl(''),
    brand: new FormControl(''),
    percentage: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl('')
  })
  
  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id");
    this.beerService.getBeerByID(this.id).subscribe(currentBeer => {
      this.productForm.patchValue({
        name: currentBeer.name,
        brand: currentBeer.brand,
        percentage: currentBeer.percentage,
        price: currentBeer.price,
        stock: currentBeer.stock
      });
    });
  }

  save() {
    const product = this.productForm.value;
    product.id = this.id;
    this.beerService.updateBeer(product).subscribe(() => {
      this.router.navigateByUrl('/products');
    });
  }

}
