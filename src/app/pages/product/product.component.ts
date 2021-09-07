import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productList: any[] = [
    {
      name: 'The Sideswept Dhoti',
      photo: '../../../assets/images/container_product.jpg',
      category: 'Pantalones para Dama',
      rating: [1,2,3,4,5],
      price: 139.99,
      size: [
        {type: 'S', available: false},
        {type: 'M', available: true},
        {type: 'L', available: true},
        {type: 'XL', available: false},
        {type: 'XXL', available: false},
      ],
      kit: [
        {type: 'HOME', available: true},
        {type: 'AWAY', available: true},
        {type: 'THIRD', available: true}
      ]
      }
  ];

bag_products: number = 0;

 my_product = {
   size: '',
   kit: '',
   cant: 0
 }


  constructor() { }

  ngOnInit(): void {

  }

  amount_minus(){
    if(this.my_product.cant == 0){
      return;
    }
    this.my_product.cant--;
  }

  amount_plus(){
    this.my_product.cant++;
  }

  addCart(){
    this.my_product.size = '';
    this.my_product.kit = '';
    this.bag_products = this.my_product.cant;
    this.my_product.cant = 0;
  }

}
