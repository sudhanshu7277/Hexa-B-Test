import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class DataService {

  private url = 'https://1.api.fy23ey06.careers.ifelsecloud.com/';
  constructor(private http: HttpClient) { }

  getChartData() {
    
    return this.http.get(this.url);
  }

}