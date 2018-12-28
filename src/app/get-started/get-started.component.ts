import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as Version from '../version';
import * as EmailValidator from 'email-validator';
import { ViewChild } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';



@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  fname: string;
  lname: string;
  email: string;
  password: string;
  password2: string;
  team: string;

  showTeamError: boolean;
  showError: boolean;
  showEmailError: boolean;
  errorTeamMessage: string;
  errorMessage: string;
  errorEmailMessage: string;


  onTeamCheck(v) {
    this.showTeamError = false;
    try {
      this.http.get(Version.API_URL + '/api/checkTeam?name=' + v).subscribe(resp => {

      }, (err) => {


        if (err.status == 409) {
          if (err.error == null) {
            this.showTeamError = true;
            this.errorTeamMessage = "This name is already in use! Please use a other name or contact our support (support@support-pp.cloud) if you are the legal owner of this name. ";
            return;
          }

          if (err.error.status == 0) {
            this.showTeamError = true;
            this.errorTeamMessage = "This name is blocked under our Terms of Use. Change you team name to a user friendly name. ";
            return;
          }
          if (err.error.status == 1) {
            this.showTeamError = true;
            this.errorTeamMessage = "You are the owner of this protected name? Please contact our support: support@support-pp.cloud ";
            return;
          }

        }
        if (err.status == 406) {
          this.showTeamError = true;
          this.errorTeamMessage = "This name is invalied! example: magiccoder ";
          return;
        }


      });
    } catch (err) {
      console.log(err)
    }

  }

  onEmailCheck(v) {
    this.showEmailError = false;
    try {
      this.http.get(Version.API_URL + '/api/checkEmail?email=' + v).subscribe(resp => {

      }, (err) => {
        this.showEmailError = true;
        this.errorEmailMessage = "Oh, the email adresse is allready in use!"

      });
    } catch (err) {
      console.log(err)
    }

  }

  send() {

    this.showError = false;
    this.errorMessage = "Please complete: ";


    if (this.fname == undefined) {
      this.showError = true;
      this.errorMessage += "<li>First name</li>"
    }

    if (this.lname == undefined) {
      this.showError = true;
      this.errorMessage += "<li>Last name</li>"
    }

    if (this.email == undefined) {
      this.showError = true;
      this.errorMessage += "<li>E-Mail</li>"
    }

    if (this.password == undefined) {
      this.showError = true;
      this.errorMessage += "<li>Password</li>"
    }

    if (this.password2 == undefined) {
      this.showError = true;
      this.errorMessage += "<li>Repeat password</li>"
    }
    if (this.team == undefined) {
      this.showError = true;
      this.errorMessage += "<li>Team name</li>"
    }
    if (this.password != this.password2) {
      this.showError = true;
      this.errorMessage += "<li><b>Your password does not match</b></li>"
    }
    if (!EmailValidator.validate(this.email)) {
      this.showError = true;
      this.errorMessage += "<li><b>Your email looks invalied!</b></li>"
    }
    if (this.captcha.getResponse() == ""){
      this.showError = true;
      this.errorMessage += "<li><b>Your are a humen? Accept Google reCAPTCHA</b></li>"
    }

    if (!this.showTeamError || !this.showError || !this.showEmailError) {
      console.log("Send -> ")
      console.log("KEY :: " + this.captcha.getResponse())



     

        const body = new HttpParams()
          .set('email', this.email)
          .set('fname', this.fname)
          .set('lname', this.lname)
          .set('team', this.team)
          .set('password', this.password)
          .set('password2', this.password2)
          .set('g-recaptcha-response', this.captcha.getResponse());
        


        this.http.post(Version.API_URL + '/api/new',
          body.toString()
          , { headers: { 'content-type': 'application/x-www-form-urlencoded' } }).subscribe(resp => {
           this.router.navigate(["/fuJgMw4LwIzedfCTWLX2tDmAcAK"])
          }, (err) => {
            console.log("ERROR 22")

          });
      
    }
  }
}
