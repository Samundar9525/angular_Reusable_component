import { AfterViewInit, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
declare let Plotly: any;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements AfterViewInit {
  constructor(public dialog: MatDialogRef<ChartsComponent>,@Inject(MAT_DIALOG_DATA) public data: any,){

  }


  ngAfterViewInit(): void {
    Plotly.newPlot(this.data?.id, this.data.dataSource.values,this.data.dataSource.layout,this.data.dataSource.config);
  }

}
