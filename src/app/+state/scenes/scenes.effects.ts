import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpService } from './../../services/http.service';
import * as scenesActions from './scenes.actions';
import { Scene } from './scenes.interfaces';

@Injectable({ providedIn: 'root' })
export class ScenesEffect {
  constructor(private httpService: HttpService, private actions$: Actions) {}

  loadScenes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(scenesActions.loadScenes),
      switchMap(() => {
        return this.httpService.getAllScenes().pipe(
          map((response) => {
            let scenes: Scene[] = [];
            Object.keys(response).forEach((key) => {
              scenes?.push({
                id: key,
                ...response[key],
              });
            });

            return scenesActions.loadScenesSuccess({ payload: scenes });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(scenesActions.loadScenesError({ error }));
          })
        );
      })
    );
  });
}
