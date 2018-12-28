import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as Version from '../version';



@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  showTeamError: boolean;
  showEmailError: boolean;
  errorTeamMessage: string;
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
}
