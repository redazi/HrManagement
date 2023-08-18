import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/service/config.service';

@Injectable({
  providedIn: 'root'
})
export class PostulationService {
  private accessToken!: string | null;
  private domain!: string | null;
  private url!: string;
  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  list(id:any): Observable<any> {

    this.accessToken = localStorage.getItem('access_token');
    this.domain = localStorage.getItem('instance_url');

    this.url =  this.domain + "/services/data/v58.0/query/?q=SELECT id,name,description__c,location__c,image__c,	openDate__c,closeDate__c FROM JobPosting__c where 	id  IN (SELECT JobPosting__c FROM Application__c where candidat__c='" + id+"') ";

    console.log("CardService", this.accessToken);
    console.log("CardService", this.domain);

    const headers = {
      "Authorization": "Bearer " + this.accessToken,
      "Content-Type": "application/json"
    }

    return this.httpClient.get<any>(this.url, { headers });
  }
}
