import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../service/config.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  private accessToken!: string | null;
  private domain!: string | null;
  private url!: string;
  constructor(private httpClient: HttpClient, private configService: ConfigService) { }


  checkListIfEmpty(candidateEmail: any,password: any): Observable<Object> {
   
    this.accessToken = this.configService.getAccessToken();
    this.domain = this.configService.getDomain();
    this.url =  this.domain + "/services/data/v57.0/query/?q=select Id from candidat__c  where candidateEmail__c='" + candidateEmail+"' and password__c='" + password+"'";
   
    const headers = {
      "Authorization": "Bearer " + this.accessToken,
      "Content-Type": "application/json"
    }
    return this.httpClient.get<any>(this.url, { headers });

  }
}
