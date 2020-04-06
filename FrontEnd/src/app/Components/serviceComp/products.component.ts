import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public players=[];
  constructor(private _Playerservice : ProductService) {
    this._Playerservice.getPlayers().subscribe(data =>this.players=data);
   }

  ngOnInit() {
  }

}
