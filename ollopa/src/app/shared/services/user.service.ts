import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

const SECTION_LOCAL_STORAGE_KEY = 'SECTION';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private localStorageService: LocalStorageService) { }

  getSection(): string {
    return this.localStorageService.getItem(SECTION_LOCAL_STORAGE_KEY);
  }

  setSection(section: string): void {
    this.localStorageService.setItem(SECTION_LOCAL_STORAGE_KEY, section);
  }
}
