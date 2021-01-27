import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {URL} from '../config';
import {Observable} from 'rxjs';
import {IPost} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${URL}/posts`);
  }
}
