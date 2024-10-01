import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'assets/data.json';

  constructor(private httpClient: HttpClient) {}

  fetchData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }
}
