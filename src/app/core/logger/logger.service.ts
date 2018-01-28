import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class LoggerService {
  infoDuration = 2000;
  errorDuration = 4000;

  constructor(private snackBar: MatSnackBar) {}

  info(message: string) {
    this.snackBar.open(message, 'Ok', {duration: this.infoDuration});
  }

  error(message: string, action: string) {
    this.snackBar.open(`An error occurred: ${message}`, action, {duration: this.errorDuration});
  }
}
