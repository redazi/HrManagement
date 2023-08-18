import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopupService } from '../service/popup-service.service';
import { MatDialog } from '@angular/material/dialog';
import { JobsService } from 'src/app/jobs/jobs.service';
import { JobdetailsService } from '../service/jobdetails.service';

import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-apply-job-form',
  templateUrl: './apply-job-form.component.html',
  styleUrls: ['./apply-job-form.component.css']
})
export class ApplyJobFormComponent {
  form: FormGroup;
  selectedFile!: File ; // Add this property to store the selected file
idj ! : any;
  constructor(
    private formBuilder: FormBuilder,private jobsService : JobsService,private jobdetailsService : JobdetailsService,private router: Router,
    public dialogRef: MatDialogRef<ApplyJobFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  
    console.log('Data received in the dialog:', data);
    this.idj=data.Id;
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cv: [''], // Add the 'cv' form control for the file input
    });
  }

  ngOnInit(): void {
    console.log("submit")
    const submitButton = document.getElementById('submitButton');

    if (submitButton) {
      submitButton.addEventListener('click', () => {
        // Get the form input values
        
        const emailInput = document.getElementById('emailInput') as HTMLInputElement;
        const nameInput = document.getElementById('nameInput') as HTMLInputElement;
    

      
        const email = emailInput.value;
        const password = nameInput.value;
       
console.log(email);
console.log(password);
        // Call the add() function with the input values
        this.add(nameInput,emailInput);
      });
    }


  }
    submit(){
      console.log("submit")
      const submitButton = document.getElementById('submitButton');

    if (submitButton) {
      submitButton.addEventListener('click', () => {
        // Get the form input values
        
        const emailInput = document.getElementById('emailInput') as HTMLInputElement;
        const nameInput = document.getElementById('nameInput') as HTMLInputElement;
    

      
        const email = emailInput.value;
        const password = nameInput.value;
       
console.log(email);
console.log(password);
        // Call the add() function with the input values
        this.add(nameInput,emailInput);
      });
    }
    }
  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    console.log(this.selectedFile);
  }
  async uploadFile(recordId : any){

    try {
      const fileContentBase64 = await this.readFileAsBase64(this.selectedFile);
      // Replace 'YOUR_ACCESS_TOKEN' and 'YOUR_CUSTOM_OBJECT_RECORD_ID' with actual values
      await this.jobsService.uploadFileToSalesforce( recordId, this.selectedFile.name, fileContentBase64);
  
      // Optional: Handle success message or other actions after file upload
      console.log('File uploaded successfully.');
    } catch (error) {
      console.error('Error while processing file:', error);
    }
  }
  
  
  
    readFileAsBase64(file: File): Promise<string> {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result?.toString()?.split(',')[1] || '');
        reader.onerror = () => reject(new Error('Error reading file.'));
        reader.readAsDataURL(file);
      });
    }


    add(name : any,email : any){
      console.log("hello");
      this.jobdetailsService.add(name, email,localStorage.getItem('idCandidat'), this.idj).subscribe(
        (response) => {
          console.log('Response this.idj:', this.idj);
          // Handle the response from the server, if needed
          console.log('Response:', response.id);
         this.uploadFile(response.id)
         // this.router.navigate(['SignIn']);
        },
        (error) => {
          // Handle errors, if any
          console.error('Error:', error);
        }
      );
    }
  // Call the add() function with the input values

  onSubmit() {
    console.error("Error: heelloo");
    if (this.form.valid && this.selectedFile) {
      console.error("Error: heelloo 111 ");
      const formData = new FormData();
      formData.append('name', this.form.value.name);
      formData.append('email', this.form.value.email);
      formData.append('cv', this.selectedFile, this.selectedFile.name);
this.add(this.form.value.name,this.form.value.email)
      // Now you can handle the form data, e.g., submit it to a server or perform any other logic.
      //this.uploadFile(response.id)
      // After processing, you can close the dialog:
      this.dialogRef.close();
    }
  }

  onCancel() {
    // Close the dialog without saving.
    this.dialogRef.close();
  }
}
