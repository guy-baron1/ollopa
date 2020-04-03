import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sound } from 'src/app/shared/models/sound';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// this is a fake service for ngrx demo
export class SoundService {

  constructor() { }

  getParameterSounds(parameter: string): Observable<Sound[]> {
    // THIS IS JUST FOR TESTING, WILL BE REPLACED WITH REAL API CALL
    const sounds: Sound[] = [
      { path: 'asdasd' },
      { path: 'qweqwe' },
      { path: 'ertert' }
    ];
    return of(sounds).pipe(delay(1000));
  }
}
