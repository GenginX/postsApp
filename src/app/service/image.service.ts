// import {Injectable} from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// import {ImageModel} from '../model/image.model';
// import {Observable} from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ImageService {
//   private number: number;
//
//   constructor(private http: HttpClient) {
//   }
//
//   public ReadImage(): Observable<ImageModel[]> {
//     this.number = Math.floor(Math.random() * (300 + 1));
//     return this.http.get<ImageModel[]>(`https://picsum.photos/id/${this.number}/200/300`);
//   }
// }
