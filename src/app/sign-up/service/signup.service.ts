import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private accessToken!: string | null;
  private domain!: string | null;
  private url!: string;
  constructor(private httpClient: HttpClient, private configService: ConfigService) { }
  add(name: any, email: any, password: any): Observable<any> {
    // Your existing code
    this.url = this.domain + "/services/data/v58.0/sobjects/candidat__c";
    this.accessToken = this.configService.getAccessToken();
    this.domain = this.configService.getDomain();
    const headers = {
      "Authorization": "Bearer " + this.accessToken,
      "Content-Type": "application/json"
    }
  
    // Use the input parameters to create the body
    const body = {
      "Name": name,
      "candidateEmail__c": email,
      "password__c": password,
      
    };
  
    return this.httpClient.post<any>(this.url, body, { headers });
  }
  list(): Observable<any> {

    this.accessToken = localStorage.getItem('access_token');
    this.domain = localStorage.getItem('instance_url');

    this.url =  this.domain + "/services/data/v58.0/query/?q=SELECT id,name FROM account LIMIT 200";

    console.log("CardService", this.accessToken);
    console.log("CardService", this.domain);

    const headers = {
      "Authorization": "Bearer " + this.accessToken,
      "Content-Type": "application/json"
    }

    return this.httpClient.get<any>(this.url, { headers });
  }
}
