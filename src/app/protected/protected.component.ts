import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { User } from 'oidc-client';
@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {
  public user: User;
  public teste = "teste"
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = this.authService.getClaims();
    console.log(this.user.profile.website)
    console.log(this.teste)
  }

}
