import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Falcon9Component } from './vehicles/falcon9/falcon9.component';
import { FalconHeavyComponent } from './vehicles/falcon-heavy/falcon-heavy.component';
import { DragonComponent } from './vehicles/dragon/dragon.component';
import { StarshipComponent } from './vehicles/starship/starship.component';
import { HumanSpacefightComponent } from './human-spacefight/human-spacefight.component';
import { RideshareComponent } from './rideshare/rideshare.component';
import { MissionComponent } from './mission/mission.component';
import { LaunchesComponent } from './launches/launches.component';
import { CareersComponent } from './careers/careers.component';
import { UpdatesComponent } from './updates/updates.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'vehicles',
    children: [
      {
        path: 'falcon-9',
        component: Falcon9Component,
      },
      {
        path: 'falcon-heavy',
        component: FalconHeavyComponent,
      },
      {
        path: 'dragon',
        component: DragonComponent,
      },
      {
        path: 'starship',
        component: StarshipComponent,
      },
    ]
  },
  { path: 'human-spacefight', component: HumanSpacefightComponent },
  { path: 'rideshare', component: RideshareComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'launches', component: LaunchesComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'updates', component: UpdatesComponent },
  { path: '**',  redirectTo: '/', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
