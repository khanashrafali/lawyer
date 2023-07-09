import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
declare var $: any;

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private modalOpen = new Subject<any>();
  private modalClose = new Subject<any>();
  constructor(private matSnackBar: MatSnackBar) {}

  openSnackbar(message: string, action: string | undefined = undefined) {
    this.matSnackBar.dismiss();
    this.matSnackBar.open(message, action, {
      duration: 2000,
      panelClass: ['snackbar'],
    });
  }

  // manage modals

  get afterClose() {
    return this.modalClose.pipe(take(1));
  }

  onModalDataChange() {
    return this.modalOpen.asObservable();
  }

  openModal(selector: string, data?: any) {
    this.modalOpen.next(data);
    $(selector).modal('show');
    return { afterClose: this.afterClose };
  }

  closeModal(selector: string, data?: any) {
    this.modalClose.next(data);
    $(selector).modal('hide');
  }
}
