import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { JobsService } from '../jobs/jobs.service';
import { ApplyJobFormComponent } from './apply-job-form/apply-job-form.component';
import { JobdetailsService } from './service/jobdetails.service';
import { PopupService } from './service/popup-service.service';

@Component({
  selector: 'app-jobs-details',
  templateUrl: './jobs-details.component.html',
  styleUrls: ['./jobs-details.component.css']
})
export class JobsDetailsComponent {
  jobs !: any[];
  id !: any;
  name !: any;
  constructor(private getJob: JobdetailsService,private route: ActivatedRoute,private popupService: PopupService,private _dialog: MatDialog){
    this.name=localStorage.getItem('name');

  }
  addEditTalk() {
    // Use the injected dialog service to launch the previously created edit-talk
    // component. Once the dialog closes, we assign the updated talk data to
    // the specified talk.
    const dataToSend = {
      // Add the properties you want to pass here
      Id: this.id,
   
    };
  
    this._dialog.open(ApplyJobFormComponent, {   data: dataToSend })
      .afterClosed()
      .subscribe(newTalkData => {
    
      });
  }
  
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      // Use the id in your component logic
      console.log('jobs ID:',  this.id );
    });

    this.getById(this.id);
  }
  openPopup() {
    this.popupService.showPopup();
  }
  private getById(id:any) : void {
    console.log("tajribaa 1")

  this.getJob.getJob(id).subscribe(
    (response) => {
      // Handle the response from the server, if needed
      console.log('Response:', response);
  
     
      this.jobs = response.records;      
      console.log(' this.jobs:',  this.jobs);
      
     // this.router.navigate(['Jobs']);
    },
    (error) => {
      // Handle errors, if any
      console.error('Error:', error);
    }
  );

}

}
