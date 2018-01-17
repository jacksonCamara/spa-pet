import { Component } from '@angular/core';
import { AuthService } from './services/auth.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) { }
  title = 'app';

  public login(event): void {
    console.log(event);
    this.authService.startAuthentication();
  }

  public logout(event): void {
    console.log(event);
    this.authService.finishAuthentication();
  }
}
