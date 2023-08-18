import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsPostulationService } from './service/details-postulation.service';

@Component({
  selector: 'app-details-postulations',
  templateUrl: './details-postulations.component.html',
  styleUrls: ['./details-postulations.component.css']
})
export class DetailsPostulationsComponent {
  id : any;
  status ! : string; 
  jobs !: any[];
constructor(private route: ActivatedRoute,private postulation: DetailsPostulationService){
  this.route.params.subscribe(params => {
    this.id = params['id'];
    // Use the id in your component logic
    console.log('jobs ID:',  this.id );
  });
  //this.status="Signature du Contrat";
  this.getById(this.id );
}


private getById(id:any) : void {
  console.log("tajribaa 1")

this.postulation.getJob(id).subscribe(
  (response) => {
    // Handle the response from the server, if needed
    console.log('Response:', response);

   
    this.jobs = response.records; 
    this.status =    this.jobs[0].Status__c;   
    console.log(' this.jobs:',  this.jobs);
    console.log(' this.status:',   this.status);
    
   // this.router.navigate(['Jobs']);
  },
  (error) => {
    // Handle errors, if any
    console.error('Error:', error);
  }
);

}
}
