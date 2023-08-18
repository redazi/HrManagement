import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  projectCount: number = 0;
  name ! : any;
  teamCount: number = 0;
  profile!: string;
  Name!: string;
  email!: string;
  given_name!: string;
  picture !: string;
  zoneinfo !: string;
  entreprise !: string;
  street_address !:string;
  locality !: string;
  country !: string;
  postal_code !: string;
}
