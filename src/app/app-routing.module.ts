import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContacteditComponent } from './contactedit/contactedit.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';

const routes: Routes = [
  {path:"getcontacts",component:ContactlistComponent},
  {path:" ",redirectTo:"getcontacts",pathMatch:"full"},
  {path:"createcontact",component:CreatecontactComponent},
  {path:"edit/id",component:ContacteditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
