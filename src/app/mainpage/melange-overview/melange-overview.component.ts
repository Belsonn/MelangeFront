import { Component, OnInit } from '@angular/core';
import { Melange } from 'src/app/models/melange.model';
import { MelangeService } from '../melange.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { MelangeProduct } from 'src/app/models/product.model';
import { faPlus, faTrash, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProductDialogComponent } from '../../common/delete-product-dialog/delete-product-dialog.component';

@Component({
  selector: 'app-melange-overview',
  templateUrl: './melange-overview.component.html',
  styleUrls: ['./melange-overview.component.scss']
})
export class MelangeOverviewComponent implements OnInit {

  id: string;
  me: any;
  isLoading = false;
  melange: Melange;
  melangeCost;
  contentLoaded = false;
  faPlus = faPlus;
  faTrash = faTrash;
  faLongArrowAltUp = faLongArrowAltUp;
  sortOrder: string = 'desc';
  sortBy: string = 'product.price';
  sortOrderList = ['Malejąco', 'Rosnąco'];
  sortByList = ['Cena', 'Produkt', 'Mój bilans'];
  selectedOrder = 'Malejąco';
  selectedBy = 'Cena';

  constructor(
    private melangeService: MelangeService,
    private authService: AuthService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.melangeService.updateProductID = null;
    this.id = this.route.snapshot.paramMap.get('id');
    this.melangeService.getMelange(this.id).subscribe((res) => {
      this.melange = res.data.melange;
      this.me = res.data.melange.users.find((el) => {
        if (el.user._id == this.authService.getUserId()) return el;
      });
      this.melangeCost = this.melange;
      this.melangeCost.products.forEach((el) => {
        el.myCost = this.calculateMyCost(el);
      });
      this.melangeService.melange = this.melange;
    });
    setTimeout(() =>{
      this.isLoading = false;
    }, 500);
  }
  onClick() {
    console.log(this.melangeCost);
  }
  isIncome(isIncome: string) {
    return isIncome.startsWith('+');
  }

  openDialog(id) {
    const dialogRef = this.dialog.open(DeleteProductDialogComponent, {
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.onDeleteProduct(id);
      }
    })
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
    } else if (event == 'Mój bilans') {
      this.sortBy = 'myCost';
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 100);
  }

  onUpdateProduct(productId) {
    this.melangeService.updateProductID = productId;
  }
  onDeleteProduct(productId) {
    this.melangeService.deleteMelangeProduct(productId).subscribe(res => {
      this.ngOnInit();
    })
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
       return contain = true;
      } else {
        contain = false;
      }
    });
    return contain;
  }
}
