import { NullResponse } from './../models/nullResponse.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import {
  MelangeResponse,
  MelangesResponse,
  Melange,
} from '../models/melange.model';
import { ProductsResponse, ProductResponse, MelangeProductResponse } from '../models/product.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MelangeService {
  private errorStatus = new Subject<boolean>();
  melange: Melange;
  updateProductID: string;

  constructor(private http: HttpClient, private router: Router) {}

  getErrorStatus() {
    return this.errorStatus.asObservable();
  }

  createMelange(name: string) {
    this.http
      .post<MelangeResponse>(`${environment.apiURL}melange/create`, {
        name: name,
      })
      .subscribe(
        (res) => {
          this.melange = res.data.melange;
          this.router.navigate(['/melange', res.data.melange._id]);
        },
        (err) => {
          this.errorStatus.next(true);
        }
      );
  }

  joinMelange(token: string) {
    this.http
      .post<MelangeResponse>(`${environment.apiURL}melange/join`, {
        inviteToken: token,
      })
      .subscribe(
        (res) => {
          this.melange = res.data.melange;
          this.router.navigate(['/melange', res.data.melange._id]);
        },
        (err) => {
          this.errorStatus.next(true);
        }
      );
  }

  getAllProducts() {
    return this.http.get<ProductsResponse>(`${environment.apiURL}product`);
  }

  findPrice(name: string, shop: string) {
    return this.http.post<ProductResponse>(
      `${environment.apiURL}product/findPrice`,
      { name: name, shop: shop }
    );
  }

  findProductAndUpdate(name: string, shop: string, price: number) {
    return this.http.post<ProductResponse>(
      `${environment.apiURL}product/find`,
      { name: name, shop: shop, price: price }
    );
  }

  createMelangeProduct(productId, users, melangeId, paidBy, melangeUsers, melangeProductID) {
    return this.http.post<MelangeResponse>(
      `${environment.apiURL}melangeProduct/create`,
      { product: productId, users: users, melangeId: melangeId, paidBy: paidBy, melangeUsers: melangeUsers, melangeProductID: melangeProductID },
    );
  }
  deleteMelangeProduct(id) {
    return this.http.delete<NullResponse>(`${environment.apiURL}melangeProduct/${id}`)
  }
  getMyMelanges() {
    return this.http.get<MelangesResponse>(`${environment.apiURL}melange/my`);
  }

  getMelange(id) {
    return this.http.get<MelangeResponse>(`${environment.apiURL}melange/${id}`);
  }
  getMelangeProduct(id) {
    return this.http.get<MelangeProductResponse>(`${environment.apiURL}melangeProduct/${id}`)
  }
}