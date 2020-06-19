import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { LocalStorageService } from './services/local-storage.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [ThemeService, LocalStorageService],
})
export class CoreModule {}
