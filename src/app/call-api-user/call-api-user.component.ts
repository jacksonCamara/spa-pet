import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-call-api-user',
  templateUrl: './call-api-user.component.html',
  styleUrls: ['./call-api-user.component.css']
})
export class CallApiUserComponent implements OnInit {
  public response: string;
  constructor(private http: Http, private authService: AuthService) { }

  ngOnInit() {
    
  }
  
  public callApiUser(event): void{
    console.log("chamando api user")
    let url: string = "http://localhost:5000/user";
    let header = new Headers({ 'Authorization': this.authService.getAuthorizationHeaderValue()});
    let options = new RequestOptions({ headers: header });

    this.http.get(url, options)
      .subscribe(response => this.response = response.text());
      console.log(this.response);
      console.log(this.authService.getAuthorizationHeaderValue());
  }
}
