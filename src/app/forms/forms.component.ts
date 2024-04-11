import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
  public formData!: FormGroup ;
  constructor(public dialog: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private _fb: FormBuilder){
      this.formData = this._fb.group(this.data?.fieldName)
  }

  dialogSubmit(){
    this.dialog.close(this.formData.value)
  }

  keepOrder = (a:any, b:any) => {
    return a;
}
optionSelected(ev:any,option:any){
  this.formData.get(ev)?.setValue(option)
}
}
