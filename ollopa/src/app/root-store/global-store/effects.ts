import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as globalActions from './actions';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable()
export class GlobalEffects {
  constructor(private userService: UserService, private actions$: Actions) {}

  @Effect()
  getSectionRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<globalActions.GetSectionRequestAction>(
      globalActions.ActionTypes.GET_SECTION_REQUEST
    ),
    switchMap(() =>
      observableOf(this.userService.getSection()).pipe(
        map((section) => new globalActions.GetSectionSuccessAction({ section }))
      )
    ),
    catchError((error) =>
      observableOf(new globalActions.GetSectionFailureAction({ error }))
    )
  );

  @Effect()
  setSectionRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<globalActions.SetSectionRequestAction>(
      globalActions.ActionTypes.SET_SECTION_REQUEST
    ),
    switchMap((action) =>
      observableOf(this.userService.setSection(action.payload.section)).pipe(
        map(() => new globalActions.SetSectionSuccessAction())
      )
    ),
    catchError((error) =>
      observableOf(new globalActions.SetSectionFailureAction({ error }))
    )
  );
}
