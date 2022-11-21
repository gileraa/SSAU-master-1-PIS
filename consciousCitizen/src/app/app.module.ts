import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessangerComponent } from './messanger/messanger.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsMapComponent } from './events-map/events-map.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { EventTypeSelectorComponent } from './events-map/components/event-type-selector/event-type-selector.component';
import { EventCardComponent } from './events-map/components/event-card/event-card.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'messanger', component: MessangerComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HelpComponent,
    NotificationsComponent,
    MessangerComponent,
    ProfileComponent,
    HomeComponent,
    EventsMapComponent,
    EventTypeSelectorComponent,
    EventCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatTabsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
