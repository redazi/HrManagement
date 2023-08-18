import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../service/config.service';
import { SignInErrorComponent } from './sign-in-error/sign-in-error.component';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  accessToken ! : any;
  instanceUrl ! : any;
  signInForm: FormGroup;
  candidat ! : any[];
  constructor(private signup: ConfigService,private signin : SigninService,private router: Router,private formBuilder: FormBuilder,private route: ActivatedRoute,private _dialog: MatDialog){
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [true],
    });
 
  }
  
  ngOnInit(): void {


    console.log(" this.signup.instance_url()", this.signup.getDomain());
    console.log("this.signup.accessToken() ",this.signup.getAccessToken());
  
/*
    if(localStorage.getItem('instance_url') && localStorage.getItem('access_token')){
      console.log("checked " );
      const urlParams = new URLSearchParams(window.location.hash.substr(1));
      this.accessToken = urlParams.get('access_token');
  this.instanceUrl = urlParams.get('instance_url');
  localStorage.setItem('access_token', this.accessToken);
  localStorage.setItem('instance_url', this.instanceUrl);
  
    }else{

      console.log("nottttttttt checked " );
    }
 */
 
// Store the parameters in local storage



//this.list();

const signUpButton = document.getElementById('signinButton');

    if (signUpButton) {

      signUpButton.addEventListener('click', () => {
        // Get the form input values
        
        const emailInput = document.getElementById('emailInput') as HTMLInputElement;
        const passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
    

      
        const email = emailInput.value;
        const password = passwordInput.value;
       
console.log(email);
console.log(password);
        // Call the add() function with the input values
        this.checkById(email,password);
      });
    }
  }
checkById(candidateEmail:any,password:any){
  this.signin.checkListIfEmpty(candidateEmail,password).subscribe(
    (response: any) => {
      console.log('checkListIfEmpty:', response);
      console.log('totalSize:', response.totalSize);
      if(response.totalSize!=0){
        this.candidat = response.records;
        console.log("this candidat exist");
        console.log("hadaa howa response.records.id",this.candidat[0].Id
        )
        this.router.navigate(['Jobs/candidat/'+this.candidat[0].Id
      ]);
       
      }else{
       
        console.log("this candidat not exist");
   this.error();
      }
    },
    error => {
      console.error('Error checkListIfEmpty list:', error);
     
    }
  );
}
onSubmit1() {
  console.log("hello")
  if (this.signInForm.valid) {
    // Form is valid, handle the form submission here
    const formData = this.signInForm.value;
    console.log('Form data:', formData);

    // You can perform further actions, such as sending the data to the server.
  }}

  private list() : void {
    this.signup.list().subscribe(data=> {
      console.log("this.cardService.list().subscribe");
      console.log(data);
   
  });
}

error() {
  // Use the injected dialog service to launch the previously created edit-talk
  // component. Once the dialog closes, we assign the updated talk data to
  // the specified talk.

  this._dialog.open(SignInErrorComponent)
    .afterClosed()
    .subscribe(newTalkData => {
  
    });
}

}
