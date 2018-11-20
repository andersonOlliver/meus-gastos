import {Component, ViewChild} from '@angular/core';
import {AuthService} from './shared/services/auth.service';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('snav') sidenav: MatSidenav;

  constructor(private authService: AuthService) {

  }


  logout(){
    this.sidenav.close();
    this.authService.logout();
  }
}
