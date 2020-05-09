import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { LayoutComponent } from './layout/layout.component';
import { AboutmeComponent } from './layout/aboutme/aboutme.component';
import { MycareerComponent } from './layout/mycareer/mycareer.component';
import { MystudyComponent } from './layout/mystudy/mystudy.component';
import { WelcomeComponent } from './modals/welcome/welcome.component';
import { TechskillsComponent } from './layout/techskills/techskills.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AboutmeComponent,
    MycareerComponent,
    MystudyComponent,
    WelcomeComponent,
    TechskillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
