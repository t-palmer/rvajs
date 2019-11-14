import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item, Server} from './state.types';


@Injectable({
  providedIn: 'root'
})
export class StatelessService {
  constructor(
    private http: HttpClient
  ) { }

  public serverFactory(url: string):
    Server {
    return new Server(url);
  }

  public getItems(server: Server):
    Observable<Item[]> {
    return this.http
      .get<Item[]>(server.url);
  }
}
