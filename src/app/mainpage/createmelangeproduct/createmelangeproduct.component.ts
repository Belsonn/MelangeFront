import { MelangeUser } from './../../models/melangeUser.model';
import { UserModel } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { MelangeService } from '../melange.service';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createmelangeproduct',
  templateUrl: './createmelangeproduct.component.html',
  styleUrls: ['./createmelangeproduct.component.scss'],
})
export class CreateMelangeProductComponent implements OnInit {
  products: [string] = [''];
  shops: [string] = [''];
  price: number = 0;
  isLoading = false;
  selectedShop: string = '';
  selectedProduct: string = '';
  melangeUsers: [MelangeUser];
  errorServer = false;
  errorUser = false;
  priceError = false;
  userControl = new FormControl([]);
  melangeId: string = '';
  paidBy: MelangeUser;

  constructor(private melangeService: MelangeService, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.melangeUsers = this.melangeService.melange.users;
    this.melangeId = this.melangeService.melange._id;

    this.melangeService.getAllProducts().subscribe((res) => {
      res.data.products.forEach((product) => {
        if (!this.products.includes(product.name)) {
          this.products.push(product.name);
        }
        if (!this.shops.includes(product.shop)) {
          this.shops.push(product.shop);
        }
      });
      this.products.splice(0, 1);
      this.shops.splice(0, 1);
      this.isLoading = false;
    });
  }

  onTest(){
    console.log(this.userControl.value)
  }

  onUserRemoved(user: string) {
    const users = this.userControl.value as string[];
    this.removeFirst(users, user);
    this.userControl.setValue(users);
  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  onPriceChange(){
    this.priceError = false;
  }

  getProduct() {
    if (this.selectedShop !== '') {
      this.findPrice(this.selectedProduct, this.selectedShop);
    }
  }

  getShop() {
    if (this.selectedProduct !== '') {
      this.findPrice(this.selectedProduct, this.selectedShop);
    }
  }

  findPrice(product, shop) {
    this.isLoading = true;
    this.melangeService.findPrice(product, shop).subscribe(
      (res) => {
        if (res.data !== null) {
          this.price = res.data.product.price;
        }
        this.isLoading = false;
      },
      (err) => {
        this.price = 0;
        this.isLoading = false;
      }
    );
  }

  onAddProduct(form: NgForm) {
    this.isLoading = true;
    this.errorUser = false;
    if (!form.valid || this.userControl.value.length == 0 || !this.paidBy) {
      this.errorUser = true;
      this.isLoading=false;
      return;
    }
    if(form.value.price < 0) {
      this.priceError = true;
      this.isLoading = false;
      return;
    }
    this.melangeService
      .findProductAndUpdate(form.value.name, form.value.shop, form.value.price)
      .subscribe(
        (res) => {
          this.melangeService
            .createMelangeProduct(res.data.product, this.userControl.value, this.melangeId, this.paidBy)
            .subscribe(
              (res) => {
                this.router.navigate(['/melange', this.melangeId]);
              },
              (err) => {
                this.errorServer = true;
              }
            );
        },
        (err) => {
          this.errorServer = true;
        }
      );
  }
}
