import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageDataService {
  private url: string = 'http://localhost:4200/assets/json/item.json';

  constructor(private http: HttpClient) { }

  getImageData(): Observable<any> {
    return this.http.get(this.url);
  }
}
