import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sound } from 'src/app/shared/models/sound';

@Injectable({
  providedIn: 'root'
})
// this is a fake service for ngrx demo
export class SoundService {

  constructor() { }

  getParameterSounds(parameter: string): Observable<Sound[]> {
    // this should request data from server
    return new Observable<Sound[]>();
  }
}
