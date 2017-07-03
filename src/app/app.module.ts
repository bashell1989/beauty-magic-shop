import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TodoItemsComponent } from './components/pages/todo-items/todo-items.component';
import { TodoComponent } from './components/pages/todo/todo.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'todo', component: TodoComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    HomeComponent,
    AboutComponent,
    TodoItemsComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
