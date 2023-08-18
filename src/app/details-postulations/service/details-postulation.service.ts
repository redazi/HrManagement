import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from 'src/app/service/config.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsPostulationService {
  private accessToken!: string | null;
  private domain!: string | null;
  private url!: string;
 
  constructor(private httpClient: HttpClient, private configService: ConfigService) { }

  getJob(id: any): Observable<any> {
    console.log("getjob id : ",id);
    this.accessToken = localStorage.getItem('access_token');
    this.domain = localStorage.getItem('instance_url');
    this.url =  this.domain + "/services/data/v57.0/query/?q=SELECT id,Status__c FROM application__c  where JobPosting__c='" + id+"'";
   
    const headers = {
      "Authorization": "Bearer " + this.accessToken,
      "Content-Type": "application/json"
    }
    return this.httpClient.get<any>(this.url, { headers });

  }
}
