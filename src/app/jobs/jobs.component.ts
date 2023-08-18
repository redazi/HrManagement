import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from './jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  jobs !: any[];
  id : any;
  name : any;
  candidat !: any[];
  constructor(private signup: JobsService,private router: Router,private route: ActivatedRoute){


    //this.name=localStorage.getItem('name');
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      //localStorage.setItem('idCandidat', params['id']);
      this.id = params['id'];
      // Use the id in your component logic
      console.log('candidat ID:',  this.id );
    });
   

this.list(localStorage.getItem('idCandidat'));
this.name=localStorage.getItem('name');
if(localStorage.getItem('idCandidat')==null){
  localStorage.setItem('idCandidat', this.id);
}

  }



  checkById(id : any){
    console.log("checkById",id);
    this.signup.checkListIfEmpty(this.id).subscribe(
     
      (response: any) => {
        console.log('checkListIfEmpty:', response);
        console.log('totalSize:', response.totalSize);
        if(response.totalSize!=0){
          this.candidat = response.records;
          console.log("this candidateEmail__c exist");
          console.log("hadaa howa response candidateEmail__c",this.candidat[0].candidateEmail__c);
          localStorage.setItem('name', this.candidat[0].candidateEmail__c);
          localStorage.setItem('idCandidat', this.id);
         // this.name=this.candidat[0].candidateEmail__c;
       
        }else{
         
          console.log("this candidat not exist");
     
        }
      },
      error => {
        console.error('Error checkListIfEmpty list:', error);
       
      }
    );}
  private list(id : any) : void {
    console.log("tajribaa 1")
  
  this.signup.list(id).subscribe(
    (response) => {
      // Handle the response from the server, if needed
      console.log('Response:', response);
      this.jobs = response.records;
      console.log('jobs:', this.jobs);

    //  this.router.navigate(['Jobs']);
 this.checkById(this.id);
 //this.name=localStorage.getItem('name');
    },
    (error) => {
      // Handle errors, if any
      console.error('Error:', error);
    }
  );

}

}
