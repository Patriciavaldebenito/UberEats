import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfileSummaryPage } from './profile-summary.page';
import { MenuComponent } from '../../components/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileSummaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfileSummaryPage, MenuComponent]
})
export class ProfileSummaryPageModule {}
