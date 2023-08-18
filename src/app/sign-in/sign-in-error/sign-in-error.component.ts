import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in-error',
  templateUrl: './sign-in-error.component.html',
  styleUrls: ['./sign-in-error.component.css']
})
export class SignInErrorComponent {
constructor(public dialogRef: MatDialogRef<SignInErrorComponent>){

}
}
