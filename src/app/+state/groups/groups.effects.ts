import * as groupActions from './groups.actions';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import {
  GroupActionUpdate,
  GroupActionUpdateResponse,
} from './groups.interfaces';
import { group } from '@angular/animations';
import { Action } from 'rxjs/internal/scheduler/Action';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Injectable({ providedIn: 'root' })
export class GroupsEffects {
  constructor(private httpService: HttpService, private actions$: Actions) {}

  loadGroups$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(groupActions.loadGroups),
      switchMap(() => {
        return this.httpService.getAllGroups().pipe(
          map((data) => {
            return groupActions.loadGroupsSuccess({ payload: data });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(groupActions.loadGroupsError({ error }));
          })
        );
      })
    );
  });

  updateGroupAction$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(groupActions.updateGroupAction),
      switchMap((action) => {
        console.log('Calling');

        return this.httpService
          .setGroupAction(action.payload.id, action.payload.body)
          .pipe(
            map((data) => {
              console.log('And success: ', data);

              return groupActions.updateGroupActionSuccess({ payload: data });
            }),
            catchError((error: HttpErrorResponse) => {
              console.log('Error: ', error);

              return of(groupActions.updateGroupActionFail({ error }));
            })
          );
      })
    );
  });
}
