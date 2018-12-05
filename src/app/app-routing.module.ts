import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelBalanceComponent } from './components/model-object-admin/mainContainer/model-balance/model-balance.component';
import { MainDescriptionComponent } from './components/model-object-admin/mainContainer/main-description/main-description.component';
import { CodeMVZComponent } from './components/model-object-admin/mainContainer/code-mvz/code-mvz.component';
import { ContactComponent } from './components/model-object-admin/mainContainer/contact/contact.component';
import { ToirComponent } from './components/model-object-admin/mainContainer/toir/toir.component';
import { ModelObjectAdminComponent } from './components/model-object-admin/model-object-admin.component';
import { TagIdentificationComponent } from './components/tag-identification/tag-identification.component';
import { MainDescriptionTagComponent } from './components/tag-identification/main-description-tag/main-description-tag.component';

const routes: Routes = [ 
  
  { path: 'app-contact', component: ContactComponent },
  { path: 'app-model-object-admin', component: ModelObjectAdminComponent,
  children:[
    { path: 'app-model-balance', component: ModelBalanceComponent },
    { path: 'app-code-mvz', component: CodeMVZComponent },
    { path: 'app-toir', component: ToirComponent },
    { path: 'app-main-description', component: MainDescriptionComponent }
  ] },
  { path: 'app-tag-identification', component: TagIdentificationComponent,
  children:[
    { path: 'app-main-description-tag', component: MainDescriptionTagComponent }
  ] } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
