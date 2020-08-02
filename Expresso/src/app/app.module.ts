import { Routes, RouterModule } from '@angular/router';
//built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';

//component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
//routes
import { appRoutes } from './routes';
import { ChatboxComponent } from './chatbox/chatbox.component';
  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    SignUpComponent,
    ChatboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,RouterModule.forRoot(appRoutes),
    HttpClientModule,
    SlickCarouselModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
