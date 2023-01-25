import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RickCharacters } from '../types/rick';

@Injectable({
  providedIn: 'root',
})
export class RickService {
  constructor(private http: HttpClient) {}
  private RickUrl = 'https://rickandmortyapi.com/api';

  getCharacters(): Observable<RickCharacters> {
    return this.http.get<RickCharacters>(this.RickUrl + '/character');
  }
}
