import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { ApplyJobFormComponent } from './jobs-details/apply-job-form/apply-job-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PostulationsComponent } from './postulations/postulations.component';
import { DetailsPostulationsComponent } from './details-postulations/details-postulations.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SignInErrorComponent } from './sign-in/sign-in-error/sign-in-error.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

 // Make sure to import MatDialogModule

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    SidenavComponent,
    JobsComponent,
    JobsDetailsComponent,ApplyJobFormComponent, PostulationsComponent, DetailsPostulationsComponent, AddCustomerComponent, SignInErrorComponent, CalendarComponent, UserProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, BrowserAnimationsModule,  MatFormFieldModule,
    MatInputModule,MatDialogModule,MatButtonModule,  FormsModule,
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatInputModule,
    FullCalendarModule,
  ],
  providers: [  {
    provide: MatDialogRef,
    useValue: {}
  }
],
entryComponents: [ ApplyJobFormComponent,AddCustomerComponent,SignInErrorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
