import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import * as Version from '../version';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  public uid: string;
  public hash: string;
  public body: any;
  VerifyError: boolean;


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.uid = params["uid"];
      this.hash = params["hash"];
  });


      const body = new HttpParams()
      .set('uid', this.uid)
      .set('hash', this.hash);

    this.http.post(Version.API_URL + '/api/validate',
      body.toString()
      , { headers: { 'content-type': 'application/x-www-form-urlencoded' } }).subscribe(resp => {
        this.body = resp;
        window.location.href= this.body.body;
      }, (err) => {
        if (err.status == 301){
          window.location.href= err.error; 
        }
        if (err.status == 405){
          this.VerifyError = true;
        }
        console.log("ERROR 22 :: " + JSON.stringify(err))

      });
  }

}
