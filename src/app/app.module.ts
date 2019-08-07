import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompteComponent } from './compte/compte.component';
import { AuthTokenService } from './services/auth/auth-token.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { CompteService } from './services/compte/compte.service';

@NgModule({
  declarations: [
    AppComponent,
    CompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpClient
    HttpClientModule
  ],
  providers: [AuthTokenService, LocalStorageService, SessionStorageService, CompteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
