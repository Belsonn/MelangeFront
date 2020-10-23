import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { Router } from '@angular/router';
import { MelangeResponse, MelangesResponse } from '../models/melange.model';

@Injectable({ providedIn: 'root' })
export class MelangeService {
  constructor(
    private http: HttpClient,
    private AuthService: AuthService,
    private router: Router
  ) {}


  createMelange(name: string) {
    this.http
      .post<MelangeResponse>('http://localhost:3000/api/v1/melange/create', {
        name: name,
      })
      .subscribe((res) => {
        this.router.navigate(['/melange', res.data.melange._id]);
      });
  }
  getMyMelanges() {
    return this.http.get<MelangesResponse>(
      'http://localhost:3000/api/v1/melange/my'
    );
  }

  getMelange(id) {
    return this.http.get<MelangeResponse>(
      'http://localhost:3000/api/v1/melange/' + id
    );
  }
}

