import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { SoundService } from '../../shared/services/login.service';
import * as producingActions from './actions';

@Injectable()
export class ProducingEffects {
  constructor(private soundService: SoundService, private actions$: Actions) {}

  @Effect()
  getSoundsRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<producingActions.GetSoundsRequestAction>(
      producingActions.ActionTypes.GET_SOUNDS_REQUEST
    ),
    switchMap(action =>
      this.soundService.getParameterSounds(action.payload.parameter)
      .pipe(
        map(sounds =>
          new producingActions.GetSoundsSuccessAction({ sounds }))
      )),
      catchError(error =>
        observableOf(new producingActions.GetSoundsFailureAction({ error }))
      )
  );
}
