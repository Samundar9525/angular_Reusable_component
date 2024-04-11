import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnChanges {
  @Input() horizontalPosition = 'start';
  @Input() verticalPosition = 'bottom';
  @Input() counter = 0;
  @Input() isSuccess = true;

  constructor(private _snackBar: MatSnackBar) {
    console.log(this.horizontalPosition,this.verticalPosition)
    this.openSnackBar(this.isSuccess);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(
      changes['horizontalPosition']?.currentValue ||
      changes['verticalPosition']?.currentValue ||
      changes['counter']?.currentValue ||
      changes['isSuccess']?.currentValue){

      console.log(this.horizontalPosition,this.verticalPosition,this.counter,this.isSuccess)
      this.openSnackBar(this.isSuccess);
      }
  }

  openSnackBar(isSuccess:any) {
    this._snackBar.open('This is snackbar example', 'Ok', {
      horizontalPosition: this.horizontalPosition as MatSnackBarHorizontalPosition,
      verticalPosition: this.verticalPosition as MatSnackBarVerticalPosition,
      duration: 5000,
      panelClass:[isSuccess ? 'success-msg':'error-msg']
    });
  }


}
