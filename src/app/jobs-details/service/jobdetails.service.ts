import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from 'src/app/service/config.service';

@Injectable({
  providedIn: 'root'
})
export class JobdetailsService {

  private accessToken!: string | null;
  private domain!: string | null;
  private url!: string;
  constructor(private httpClient: HttpClient, private configService: ConfigService){}
  getJob(id: any): Observable<any> {
    this.accessToken = localStorage.getItem('access_token');
    this.domain = localStorage.getItem('instance_url');
    this.url =  this.domain + "/services/data/v57.0/query/?q=SELECT id,name,description__c,location__c,image__c,	openDate__c,closeDate__c FROM JobPosting__c  where id='" + id+"'";
   
    const headers = {
      "Authorization": "Bearer " + this.accessToken,
      "Content-Type": "application/json"
    }
    return this.httpClient.get<any>(this.url, { headers });

  }
  add(name: any, email: any,id:any,idJob : any): Observable<any> {
    // Your existing code
    this.url = this.domain + "/services/data/v58.0/sobjects/application__c";
    this.accessToken = this.configService.getAccessToken();
    this.domain = this.configService.getDomain();
    const headers = {
      "Authorization": "Bearer " + this.accessToken,
      "Content-Type": "application/json"
    }
  
    // Use the input parameters to create the body
    const body = {
      "Name": name,
      "email__c": email,
      "candidat__c":id,
      "JobPosting__c":idJob,
      
     
      
      
    };
  
    return this.httpClient.post<any>(this.url, body, { headers });
  }
}
