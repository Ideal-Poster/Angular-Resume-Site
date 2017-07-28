import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { ProjectsService } from './projects.service'


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    OwlModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
