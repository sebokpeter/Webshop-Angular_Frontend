import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/services/authentication-service/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  title = 'Welcome to WebShop!';
  username: string;

  constructor(private authenticationService: AuthenticationService) {
    this.username = authenticationService.getUsername();
   }

  ngOnInit() { 
  }

}
