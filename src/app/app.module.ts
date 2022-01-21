import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GroupsListComponent } from './groups/groups-list/groups-list.component';
import { GroupItemComponent } from './groups/group-item/group-item.component';
import { LightItemComponent } from './lights/light-item/light-item.component';
import { LightsListComponent } from './lights/lights-list/lights-list.component';
import { ScenesListComponent } from './scenes/scenes-list/scenes-list.component';
import { SceneItemComponent } from './scenes/scene-item/scene-item.component';
import { PlayerComponent } from './audio/player/player.component';
import { EditComponent } from './audio/edit/edit.component';
import { MenuComponent } from './menu/menu.component';
import { CreateComponent } from './create/create.component';
import { OverviewComponent } from './overview/overview.component';
import { GuideComponent } from './guide/guide.component';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './create/card/card.component';
import { ControlActionsComponent } from './create/control-actions/control-actions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { lightsReducer } from './+state/lights/lights.reducer';
import { groupsReducer } from './+state/groups/groups.reducer';
import { flowReducer } from './+state/flow/flow.reducer';
import { scenesReducer } from './+state/scenes/scenes.reducer';
import { domainReducer } from './+state/hue-domain/hue-domain.reducer';
import { DomainEffects } from './+state/hue-domain/hue-domain.effects';
import { GroupsEffects } from './+state/groups/groups.effects';
import { ScenesEffect } from './+state/scenes/scenes.effects';
import { StepsListComponent } from './flow/steps-list/steps-list.component';
import { StepItemComponent } from './flow/step-item/step-item.component';
import { TransitionTimeInSecondsPipe } from './pipes/time-stamp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    GroupsListComponent,
    GroupItemComponent,
    LightItemComponent,
    LightsListComponent,
    ScenesListComponent,
    SceneItemComponent,
    PlayerComponent,
    EditComponent,
    MenuComponent,
    CreateComponent,
    OverviewComponent,
    GuideComponent,
    AboutComponent,
    CardComponent,
    ControlActionsComponent,
    StepsListComponent,
    StepItemComponent,
    TransitionTimeInSecondsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(
      {
        lightsslice: lightsReducer,
        groupsslice: groupsReducer,
        flowslice: flowReducer,
        scenesslice: scenesReducer,
        domainslice: domainReducer,
      },
      {}
    ),
    EffectsModule.forRoot([DomainEffects, GroupsEffects, ScenesEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
