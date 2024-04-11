import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  public commentForm!: FormGroup ;

constructor(public dialog: MatDialogRef<ModalComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any, private _fb: FormBuilder){

    switch(true){
      case this.data?.isComment:
      this.commentForm = this._fb.group({
        Title: ['',Validators.required],
        Comment: ['']
      })
    }
}

dialogSubmit(){
  switch(true) {
    case this.data?.isConfiramtion:
      this.dialog.close(true);
      break;
    case this.data?.isComment:
      this.dialog.close(this.commentForm.value);
      break;
  }
}

}
