import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { AdminBookingsComponent } from './admin/admin-bookings/admin-bookings.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    AboutUsComponent,
    GalleryComponent,
    ContactUsComponent,
    LoginComponent,
    ServicesComponent,
    AdminBookingsComponent,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'about-us', component:AboutUsComponent},
      {path: 'contact-us', component:ContactUsComponent},
      {path: 'gallery', component:GalleryComponent},
      {path: 'login', component:LoginComponent},
      {path: 'services', component:ServicesComponent},

      {path: 'admin/bookings', component:AdminBookingsComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
