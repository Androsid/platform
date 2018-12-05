import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ModelComponent } from './components/model/model.component';
import { ModelBalanceComponent } from './components/model-object-admin/mainContainer/model-balance/model-balance.component';
import { MainDescriptionComponent } from './components/model-object-admin/mainContainer/main-description/main-description.component';
import { CodeMVZComponent } from './components/model-object-admin/mainContainer/code-mvz/code-mvz.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './components/model-object-admin/mainContainer/contact/contact.component';
import { ToirComponent } from './components/model-object-admin/mainContainer/toir/toir.component';
import { LeftcontentComponent } from './components/leftcontent/leftcontent.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ModelObjectAdminComponent } from './components/model-object-admin/model-object-admin.component';
import { TagIdentificationComponent } from './components/tag-identification/tag-identification.component';
import { MainDescriptionTagComponent } from './components/tag-identification/main-description-tag/main-description-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModelComponent,
    ModelBalanceComponent,
    MainDescriptionComponent,
    CodeMVZComponent,
    ContactComponent,
    ToirComponent,
    LeftcontentComponent,
    FooterComponent,
    ModelObjectAdminComponent,
    TagIdentificationComponent,
    MainDescriptionTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
