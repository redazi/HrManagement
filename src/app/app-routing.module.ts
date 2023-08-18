import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { HttpClientModule } from '@angular/common/http';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsDetailsComponent } from './jobs-details/jobs-details.component';
import { PostulationsComponent } from './postulations/postulations.component';
import { DetailsPostulationsComponent } from './details-postulations/details-postulations.component';
import {MatGridListModule} from '@angular/material/grid-list';

import { MatRadioModule } from '@angular/material/radio';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CalendarComponent } from './calendar/calendar.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
const routes: Routes = [
  


  { path: '', redirectTo: '/SignIn', pathMatch: 'full' },
  { path: 'SignIn', component: SignInComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'Jobs', component: JobsComponent },
  { path: 'Postulations', component: PostulationsComponent },
  { path: 'DetailsPostulations', component: DetailsPostulationsComponent },
  { path: 'DetailsPostulations/:id', component: DetailsPostulationsComponent },
  {path:'Jobs/:id',component: JobsDetailsComponent},
  {path:'Jobs/candidat/:id',component: JobsComponent},
 {path:'Calendar',component: CalendarComponent},
 {path:'Profile',component: UserProfileComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule, MatGridListModule,MatDatepickerModule,MatRadioModule]
})
export class AppRoutingModule {



  
 }
