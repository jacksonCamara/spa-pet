import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.css']
})

export class CallApiComponent implements OnInit {
  public response: string;
  /*
  constructor(){};
  ngOnInit(){};
  */
  constructor(private http: Http, private authService: AuthService) { }

  ngOnInit() {
    
  }
  
  public callApi(event): void{
    console.log("chamando api")
    let url: string = "http://localhost:5001/identity";
    let header = new Headers({ 'Authorization': this.authService.getAuthorizationHeaderValue() });
    let options = new RequestOptions({ headers: header });

    this.http.get(url, options)
      .subscribe(response => this.response = response.text());
      console.log(this.response);
      console.log(this.authService.getAuthorizationHeaderValue())
   
  }
}
