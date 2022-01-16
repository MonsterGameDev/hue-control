import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpService } from 'src/app/services/http.service';
import * as domainActions from './hue-domain.actions';
import { catchError, map, switchMap} from 'rxjs/operators';

import { of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DomainEffects {
  constructor(private httpService: HttpService, private actions$: Actions) { }

  loadEverything$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(domainActions.loadFullHueConfigAction),
      switchMap(() => {
        return this.httpService.getEverything().pipe(
          map((response) =>
            domainActions.loadFullHueConfigSuccessAction({ payload: response })
          ),
          catchError((error) =>
            of(domainActions.loadFullHueConfigErrorAction({ error }))
          )
        );
      })
    );
  });

}
