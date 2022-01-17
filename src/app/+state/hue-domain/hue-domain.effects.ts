import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from 'src/app/services/http.service';
import * as domainActions from './hue-domain.actions';
import { catchError, map, switchMap } from 'rxjs/operators';

import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadLightsSuccess } from '../lights/lights.actions';
import { loadGroupsSuccess } from '../groups/groups.actions';
import { loadScenesSuccess } from '../scenes/scenes.actions';
import { Group } from '../groups/groups.interfaces';
import { Light } from '../lights/lights.interfaces';
import { Scene } from '../scenes/scenes.interfaces';

@Injectable({ providedIn: 'root' })
export class DomainEffects {
  constructor(
    private httpService: HttpService,
    private actions$: Actions,
    private store: Store
  ) {}

  loadEverything$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(domainActions.loadFullHueConfigAction),
      switchMap(() => {
        return this.httpService.getEverything().pipe(
          map((data) => {
            // LIGHTS
            let lights: Light[] = [];
            Object.keys(data.lights).forEach((key) => {
              lights?.push({
                id: key,
                ...data.lights[key],
              });
            });
            this.store.dispatch(loadLightsSuccess({ payload: lights }));

            // GROUPS
            let groups: Group[] = [];
            Object.keys(data.groups).forEach((key) => {
              groups?.push({
                id: key,
                ...data.groups[key],
              });
            });
            this.store.dispatch(loadGroupsSuccess({ payload: groups }));

            // SCENES
            let scenes: Scene[] = [];
            Object.keys(data.scenes).forEach((key) => {
              scenes?.push({
                id: key,
                ...data.scenes[key],
              });
            });
            this.store.dispatch(loadScenesSuccess({ payload: scenes }));

            return domainActions.loadFullHueConfigSuccessAction({
              payload: data,
            });
          }),
          catchError((error) =>
            of(domainActions.loadFullHueConfigErrorAction({ error }))
          )
        );
      })
    );
  });
}
