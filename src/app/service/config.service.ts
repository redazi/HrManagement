import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
url!:any;
accessToken ! : any;
instanceUrl ! : any;
  constructor(private httpClient: HttpClient) { }

  getDomain(): any {
    console.log(localStorage.getItem('instance_url')!=null); 
    console.log("ana",localStorage.getItem('instance_url'));

   if(localStorage.getItem('instance_url')==null){
    console.log("dkhallt");
    const urlParams = new URLSearchParams(window.location.hash.substr(1));

    this.instanceUrl = urlParams.get('instance_url');
    localStorage.setItem('instance_url', this.instanceUrl);
   }
    

    return   localStorage.getItem('instance_url');
 

     
    
    
  }
    
  getAccessToken(): any {
    console.log(localStorage.getItem('access_token')==null);
    console.log(localStorage.getItem('access_token'));
    if(localStorage.getItem('access_token')==null){
      console.log("dkhallt ");
    const urlParams = new URLSearchParams(window.location.hash.substr(1));
    this.accessToken = urlParams.get('access_token');
    localStorage.setItem('access_token', this.accessToken);

    }
   return localStorage.getItem('access_token');
  }

  add(): Observable<any> {
   /* this.url = "https://" + this.domain + "/services/data/v58.0/sobjects/talk__c";
    this.accessToken = this.configService.getAccessToken();
    this.domain = this.configService.getDomain();
    const headers = {
      "Authorization": "Bearer " + this.accessToken,
      "Content-Type": "application/json"
    }*/
    this.url = "https://its-6c-dev-ed.develop.my.salesforce.com//services/oauth2/token";
   
   
    const body = {
      'Host':'mycompany.my.salesforce.com',
      'Content-length': '307',
      'Content-type': 'application/x-www-form-urlencoded',
      'grant_type':'authorization_code&',
      'code':'aPrxhgZ2MIpkSy0aOdn07LjKFvsFOis6RGcWXz7p8JQCjcqfed5NQLe7sxWwMY_JQFuLwHRaRA==&',
      'client_id':'3MVG9IXUyidRC0l3eh41FQMqzzRI3OR..sR8a3mtjKUVPoG8Qhf.DAhZc02FUgbAONySir_uN2j81LKaooMDy&',
      'client_secret':'FEB78E555A838F2584934559B5BB5435E7E3C8F09E73AA7CB0138B39C1300E94&',
      'redirect_uri':'http://localhost:4200'

      //'tags__c': tags__c

    };

    return this.httpClient.post<any>(this.url, body);
  }
  list(): Observable<any> {

  

    this.url = "https://its-6c-dev-ed.develop.my.salesforce.com/services/oauth2/authorize?"+"client_id=3MVG9IXUyidRC0l3eh41FQMqzzRI3OR..sR8a3mtjKUVPoG8Qhf.DAhZc02FUgbAONySir_uN2j81LKaooMDy"+
   "&redirect_uri=http://localhost:4200/&response_type=code";

    console.log("this.url", this.url);


    /*const headers = {
      "Authorization": "Bearer " + this.accessToken,
      "Content-Type": "application/json"
    }*/

    return this.httpClient.get<any>(this.url);
  }
  

}
