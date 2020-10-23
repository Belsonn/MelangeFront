import { MelangeUser } from './../../models/melangeUser.model';
import { Component, OnInit } from '@angular/core';
import { Melange } from 'src/app/models/melange.model';
import { MelangeService } from '../melange.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { MelangeProduct } from 'src/app/models/product.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-melange-view',
  templateUrl: './melange-view.component.html',
  styleUrls: ['./melange-view.component.scss'],
})
export class MelangeViewComponent implements OnInit {
  id: string;
  me: any;
  isLoading = false;
  melange: Melange;
  melangeCost;
  faPlus = faPlus;
  sortOrder: string = 'desc';
  sortBy: string = 'product.price';
  sortOrderList = ['Malejąco', 'Rosnąco'];
  sortByList = ['Cena', 'Produkt', 'Mój koszt'];
  selectedOrder = 'Malejąco';
  selectedBy = 'Cena';

  constructor(
    private melangeService: MelangeService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.melangeService.updateProductID = null;
    this.id = this.route.snapshot.paramMap.get('id');
    this.melangeService.getMelange(this.id).subscribe((res) => {
      this.me = res.data.melange.users.find((el) => {
        if (el.user._id == this.authService.getUserId()) return el;
      });
      this.melange = res.data.melange;
      this.melangeCost = this.melange;
      this.melangeCost.products.forEach((el) => {
        el.myCost = this.calculateMyCost(el);
      });
      this.melangeService.melange = res.data.melange;
      this.isLoading = false;
    });
  }
  onClick() {
    console.log(this.melangeCost);
  }
  isIncome(isIncome: string) {
    return isIncome.startsWith('+');
  }

  onChangeSortOrder(event) {
    this.isLoading = true;
    if (event == 'Rosnąco') {
      this.sortOrder = 'asc';
    } else if (event == 'Malejąco') {
      this.sortOrder = 'desc';
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 100);
  }
  onChangeSortBy(event) {
    this.isLoading = true;
    if (event == 'Cena') {
      this.sortBy = 'product.price';
    } else if (event == 'Produkt') {
      this.sortBy = 'product.name';
    } else if (event == 'Mój koszt') {
      this.sortBy = 'myCost';
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 100);
  }

  onUpdateProduct(productId) {
    this.melangeService.updateProductID = productId;
  }

  calculateMyCost(melangeProduct: MelangeProduct) {
    if (
      melangeProduct.paidBy.user._id == this.me.user._id &&
      this.productContainMe(melangeProduct)
    ) {
      return +(
        melangeProduct.product.price -
        melangeProduct.product.price / melangeProduct.users.length
      );
    } else if (
      melangeProduct.paidBy.user._id == this.me.user._id &&
      !this.productContainMe(melangeProduct)
    ) {
      return +melangeProduct.product.price;
    } else if (
      melangeProduct.paidBy.user._id != this.me.user._id &&
      this.productContainMe(melangeProduct)
    ) {
      return 0 - melangeProduct.product.price / melangeProduct.users.length;
    } else if (
      melangeProduct.paidBy.user._id != this.me.user._id &&
      !this.productContainMe(melangeProduct)
    ) {
      return 0;
    }
  }

  productContainMe(melangeProduct: MelangeProduct) {
    let contain: boolean;
    melangeProduct.users.find((el) => {
      if (el.user._id == this.me.user._id) {
        contain = true;
      } else {
        contain = false;
      }
    });
    return contain;
  }
}
