import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ConfigService } from '../service/config.service';
import { SignupService } from './service/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private signup: SignupService,private router: Router){}
  ngOnInit(): void {
    const signUpButton = document.getElementById('signUpButton');

    if (signUpButton) {
      signUpButton.addEventListener('click', () => {
        // Get the form input values
        const nameInput = document.getElementById('nameInput') as HTMLInputElement;
        const emailInput = document.getElementById('emailInput') as HTMLInputElement;
        const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
        const agreeCheckbox = document.getElementById('agreeCheckbox') as HTMLInputElement;

        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
       

        // Call the add() function with the input values
        this.signup.add(name, email, password).subscribe(
          (response) => {
            // Handle the response from the server, if needed
            console.log('Response:', response);
            this.router.navigate(['SignIn']);
          },
          (error) => {
            // Handle errors, if any
            console.error('Error:', error);
          }
        );
      });
    }
this.list();
  }


  private list() : void {
    console.log("tajribaa 1")
    this.signup.list().subscribe(data=> {
      console.log("this.cardService.list().subscribe");
      console.log("tajribaa 2")
      console.log(data);
   
  });
}

}
