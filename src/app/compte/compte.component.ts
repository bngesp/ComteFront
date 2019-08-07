import { Component, OnInit } from '@angular/core';
import { AuthTokenService } from '../services/auth/auth-token.service';
import { CompteService } from '../services/compte/compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  private token: String;

  constructor(private authService:AuthTokenService, private comptServie:CompteService) {this.token = null;}

  ngOnInit() {
    //this.token = this.authService.getToken();
    //if(this.token == null){
      this.authService.login(
        {
          username: "admin", 
          password: "admin",
          rememberMe: true
        }
      ).toPromise().then(
        result => {
          this.token = this.authService.getToken()
          console.log("authentification successfull ");
          console.log(this.token);
        },
        err => {
          console.log("authentification with some errors " +err );
        }
      )
    // }else{
    //   console.log("boy tu as deja le token "+this.token);
    // }
  }

  getAllCompte(){
    this.comptServie.getAllCompteFromBackend(this.token);
  }
  
}
