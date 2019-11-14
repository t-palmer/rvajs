import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item, Server } from './state.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatefullService {
  constructor(
    private http: HttpClient
  ) { }

  private server: Server;

  public initialize(server: Server) {
    this.server = server;
  }

  public getItems():
    Observable<Item[]> {
    return this.http
      .get<Item[]>(this.server.url);
  }
}
