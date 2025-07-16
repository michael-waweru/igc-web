import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-component',
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule, MatFormFieldModule ],
  templateUrl: './contact-component.component.html',
  styleUrl: './contact-component.component.css'
})
export class ContactComponentComponent implements OnInit {

  myForm: FormGroup;
  name: FormControl = new FormControl('',[Validators.required]);
  email: FormControl = new FormControl('',[Validators.required, Validators.email]);
  subject: FormControl = new FormControl('',[Validators.required]);
  message: FormControl = new FormControl('',[Validators.required]);
  honeypot: FormControl = new FormControl(" "); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  submitting: boolean = false; // disable the submit button if we're loading
  responseMessage: string | undefined; // the response message to show to the user

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.myForm = this.formBuilder.group({
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
      honeypot: this.honeypot,
    });
  }
  ngOnInit(): void {

  }

  onSubmit() {
    if (this.myForm.status == "VALID" && this.honeypot.value == "" && !this.submitting) {
      this.myForm.disable(); // disable the form if it's valid to disable multiple submissions
      const formData: any = new FormData();

      formData.append("name", this.myForm.getRawValue().value);
      formData.append("email", this.myForm.getRawValue().value);
      formData.append("subject", this.myForm.getRawValue().value);
      formData.append("message", this.myForm.getRawValue().value);

      this.submitting = true; // sending the post request async so it's in progresy
      this.submitted = false; // hide the response message on multiple submits
      // this.http.post("https://formspree.io/f/moqbkgge", formData).subscribe(
        const subscription = this.http.post("http://api.nutrilab.co.ke/api/store-message", formData).subscribe({
        next: (response) => {
          this.responseMessage = "Your message has been sent.";
          this.myForm.enable(); // re-enable the form after a success
          this.myForm.reset();

          this.myForm.getRawValue().clearValidators();
          this.myForm.getRawValue().updateValueAndValidity();
          this.myForm.getRawValue().clearValidators();
          this.myForm.getRawValue().updateValueAndValidity();
          this.myForm.getRawValue().clearValidators();
          this.myForm.getRawValue().updateValueAndValidity();
          this.myForm.getRawValue().clearValidators();
          this.myForm.getRawValue().updateValueAndValidity();

          this.submitted = true; // show the response message
          this.submitting = false; // re-enable the submit button
          console.log(response);
        },

        error: (error: any) => {
          if (error instanceof HttpErrorResponse) {
            this.responseMessage = "Oops! An error occurred... Reload the page and try again.";
          } else {
            this.responseMessage = "An unknown error occurred.";
          }
          this.myForm.enable(); // re-enable the form after a success
          this.submitted = true; // show the response message
          this.submitting = false; // re-enable the submit button
          console.log(error);
        }
      });
    }
  }

}
