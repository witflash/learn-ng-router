import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule, Http } from "@angular/http";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { BlogComponent } from './blog/blog.component';
import { SingleComponent } from './single/single.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ApiService } from './api.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'search', component: SearchComponent},
  { path: '**', component: NotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SearchComponent,
    BlogComponent,
    SingleComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
