import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { GameActivityComponent } from './about/game-activity/game-activity.component';
import { KonamiGuard } from './guards/konami.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'about/game-activity',
    component: GameActivityComponent,
    canActivate: [KonamiGuard]
  },
  { path: 'projects', component: ProjectsComponent },
  { path: 'callback', loadComponent: () => import('./spotify/callback/callback.component').then(m => m.CallbackComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
