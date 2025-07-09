import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicComponent } from './about/music/music.component';
import { CallbackComponent } from './about/callback/callback.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperienceComponent } from './about/experience/experience.component';
import { SkillsComponent } from './about/skills/skills.component';
import { FooterComponent } from './main/footer/footer.component';
import { HeaderComponent } from './main/header/header.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    CallbackComponent,
    ExperienceComponent,
    SkillsComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
