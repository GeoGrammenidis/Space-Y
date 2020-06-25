import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { InViewportModule } from 'ng-in-viewport';

import { AppComponent } from './app.component';
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
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    Falcon9Component,
    FalconHeavyComponent,
    DragonComponent,
    StarshipComponent,
    HumanSpacefightComponent,
    RideshareComponent,
    MissionComponent,
    LaunchesComponent,
    CareersComponent,
    UpdatesComponent,
    HomepageComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
