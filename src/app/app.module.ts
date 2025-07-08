import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicComponent } from './about/music/music.component';
import { CallbackComponent } from './about/callback/callback.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperienceComponent } from './about/experience/experience.component';
import { SkillsComponent } from './about/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    CallbackComponent,
    ExperienceComponent,
    SkillsComponent
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
