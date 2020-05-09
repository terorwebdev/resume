import { TechskillsComponent } from './layout/techskills/techskills.component';
import { AboutmeComponent } from './layout/aboutme/aboutme.component';
import { MycareerComponent } from './layout/mycareer/mycareer.component';
import { MystudyComponent } from './layout/mystudy/mystudy.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AboutmeComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'mycareer', component: MycareerComponent },
  { path: 'mystudy', component: MystudyComponent },
  { path: 'tech', component: TechskillsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
