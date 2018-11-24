import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import {PostService} from './services/post.services';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { MatInputModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule} from '@angular/material';
import { PostCreateComponent } from './post-create/post-create.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { CarsComponent } from './cars/cars.component';
import { SubmitComponent } from './submit/submit.component';

const appRoutes: Routes = [

  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'list',
    component: PostDetailsComponent
  },
  {
    path: 'create',
    component: PostCreateComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    PostCreateComponent,
    HomepageComponent,
    ContactComponent,
    CarsComponent,
    SubmitComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatMenuModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }