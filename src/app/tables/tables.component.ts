import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements AfterViewInit {

  totalSalary = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selection = new SelectionModel<any>(true,[]);
  expandedElement: any;
  isExpanded = false;
  constructor(public dialog: MatDialogRef<TablesComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private _liveAnnouncer: LiveAnnouncer) {
    this.data.dataSource.details = new MatTableDataSource(this.data.dataSource.details)
    this.getTotalSalary()

  }
  ngAfterViewInit(): void {
    this.data.dataSource.details.paginator = this.paginator;
    this.data.dataSource.details.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log( this.data.dataSource.details)
    this.data.dataSource.details.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

    checkboxLabel(row?: any): string {
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }

    getTotalSalary(){
      this.data.dataSource.details.filteredData.map((res:any)=>{
        this.totalSalary += res.salary;
      })
    }

    dialogSubmit(){
      this.dialog.close(this.selection.selected)
    }


    toggleCard(ev:any,row:any) {
      row.isExpanded =! row.isExpanded;
    }
}
