import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getBakingTips() {
    return this.http.get('./assets/data/BakingTips.json');
  }

  getProducts() {
    return this.http.get('./assets/data/ProductData.json');
  }

  getEmails() {
    return this.http.get('./assets/data/Emails.json');
  }

  postEmails(postResponse) {
    this.http.post('./assets/data/Emails.json', postResponse);
  }
}