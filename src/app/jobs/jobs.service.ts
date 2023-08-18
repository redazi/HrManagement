import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from '../service/config.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private accessToken!: string | null;
  private domain!: string | null;
  private url!: string;
  constructor(private httpClient: HttpClient, private configService: ConfigService){}


  checkListIfEmpty(id: any): Observable<Object> {
   
    this.accessToken = this.configService.getAccessToken();
    this.domain = this.configService.getDomain();
    this.url =  this.domain + "/services/data/v57.0/query/?q=select Id,candidateEmail__c from candidat__c  where id='" + id+"' ";
   
    const headers = {
      "Authorization": "Bearer " + this.accessToken,
      "Content-Type": "application/json"
    }
    return this.httpClient.get<any>(this.url, { headers });

  }
  

 uploadFileToSalesforce = async ( recordId: string, fileName: string, fileContentBase64: string) => {
  try {
    this.accessToken = this.configService.getAccessToken();
    this.domain = this.configService.getDomain();
    this.url =  this.domain + "/services/data/v53.0/sobjects/ContentVersion/";
    
    const headers = {
      'Authorization': "Bearer " + this.accessToken,
      'Content-Type': 'application/json',
    };

    // Prepare the request body
    const requestBody = JSON.stringify({
      Title: fileName,
      PathOnClient: '/' + fileName,
      VersionData: fileContentBase64,
      FirstPublishLocationId: recordId,
    });

    // Make the HTTP POST request
    const response = await axios.post(this.url, requestBody, { headers });

    // Handle the response
    if (response.status === 201) {
      console.log('File uploaded successfully. ContentVersion ID:', response.data.id);
      // You can handle the response as per your requirement
    } else {
      console.error('File upload failed:', response.data);
    }
  } catch (error) {
    console.error('Error during file upload:', error);
  }
};
  list(id:any): Observable<any> {

    this.accessToken = localStorage.getItem('access_token');
    this.domain = localStorage.getItem('instance_url');

    this.url =  this.domain + "/services/data/v58.0/query/?q=SELECT id,name,description__c,location__c,image__c,	openDate__c,closeDate__c FROM JobPosting__c where 	Status__c ='actif' and id NOT IN (SELECT JobPosting__c FROM Application__c where candidat__c='" + id+"') ";


    console.log("CardService", this.accessToken);
    console.log("CardService", this.domain);

    const headers = {
      "Authorization": "Bearer " + this.accessToken,
      "Content-Type": "application/json"
    }

    return this.httpClient.get<any>(this.url, { headers });
  }
}
