import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormsComponent } from '../forms/forms.component';
import { Validators } from '@angular/forms';
import { TablesComponent } from '../tables/tables.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartsComponent } from '../charts/charts.component';
import { TmplAstRecursiveVisitor } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public id: number | undefined;
  showSnackbar = false;
  horizontalpos = ''
  verticalpos = ''
  successStatus = true;
  counter = 0;
  componentArray = [
    {id:1,name:'Dialog Box'},
    {id:2,name:'forms'},
    {id:3,name:'Table'},
    {id:4,name:'Snackbar'},
    {id:5,name:'Charts'},
  ];
  currentComponent = [{
    id: 1,
    name: 'Table'
  }]


  DialogCards = [
    { index: 1, name: 'Dialog box with Confirmation' },
    { index: 2, name: 'Dialog box with comments(Form data)' },
    { index: 3, name: 'Empty Slots' },
    { index: 4, name: 'Empty Slots' },
    { index: 5, name: 'Empty Slots' },
  ];

  formsCards = [
    { index: 1, name: 'form with 1 column' },
    { index: 2, name: 'form with 2 column' },
    { index: 3, name: 'form with 3 column' },
    { index: 4, name: 'form with option column' },
    { index: 5, name: 'form with multiple option selection' },
    { index: 6, name: 'Empty Slots' },
    { index: 7, name: 'Empty Slots' },
    { index: 8, name: 'Empty Slots' },
  ];

  tableCards = [
    { index: 1, name: 'Table - Simple Design' },
    { index: 2, name: 'Table - Sticky Header' },
    { index: 3, name: 'Table - with footer' },
    { index: 4, name: 'Table - with Pagination' },
    { index: 5, name: 'Table - with Search field' },
    { index: 6, name: 'Table - with Sorting' },
    { index: 7, name: 'Table - with Checkbox' },
    { index: 8, name: 'Table - with Expand menu' },
  ];

  chartCards = [
    { index: 1, name: 'Bar-Graph Single bar' },
    { index: 2, name: 'Bar-Graph Grouped bar' },
    { index: 3, name: 'Bar-Graph Stacked bar' },
    { index: 4, name: 'Line Graph with scatter points' },
    { index: 5, name: 'Pie Chart' },
    { index: 6, name: 'Donut Chart' },
    { index: 7, name: 'Empty Slot' },
  ];

  snackbarCard = [
    { index: 1, name: 'Snackbar - top-left' },
    { index: 2, name: 'Snackbar - top-center'},
    { index: 3, name: 'Snackbar - top-right'},
    { index: 4, name: 'Snackbar - down-left' },
    { index: 5, name: 'Snackbar - down-center' },
    { index: 6, name: 'Snackbar - down-right'},
  ];

  sampleColumn = ['id', 'name', 'phone', 'city', 'salary'];
  sampleDetails = [
    {
      id: 101,
      name: 'Samundar',
      phone: '123454321',
      city: 'Ranchi',
      salary: 150000,
      tax: 3700,
      isExpanded: false,
    },
    {
      id: 102,
      name: 'Mukesh',
      phone: '456787654',
      city: 'Jaunpur',
      salary: 300000,
      tax: 12000,
      isExpanded: false,
    },
    {
      id: 103,
      name: 'Adarash',
      phone: '987656789',
      city: 'Patna',
      salary: 600000,
      tax: 23000,
      isExpanded: false,
    },
    {
      id: 104,
      name: 'Saubhagya',
      phone: '6574564324',
      city: 'Kanpur',
      salary: 670000,
      tax: 44000,
      isExpanded: false,
    },
    {
      id: 106,
      name: 'Tony',
      phone: '456787654',
      city: 'Newyork',
      salary: 450000,
      tax: 83000,
      isExpanded: false,
    },
    {
      id: 107,
      name: 'Captain',
      phone: '987656789',
      city: 'Dubai',
      salary: 739000,
      tax: 54360,
      isExpanded: false,
    },
    {
      id: 108,
      name: 'Thor',
      phone: '6574564324',
      city: 'jersey',
      salary: 700000,
      tax: 23000,
      isExpanded: false,
    },
    {
      id: 109,
      name: 'Hulk',
      phone: '123454321',
      city: 'paris',
      salary: 650000,
      tax: 63000,
      isExpanded: false,
    },
    {
      id: 110,
      name: 'Spiderman',
      phone: '456787654',
      city: 'Africa',
      salary: 700000,
      tax: 3000,
      isExpanded: false,
    },
    {
      id: 111,
      name: 'Strange',
      phone: '987656789',
      city: 'Dubai',
      salary: 680000,
      tax: 83000,
      isExpanded: false,
    },
    {
      id: 112,
      name: 'Hawkeye',
      phone: '6574564324',
      city: 'Kanpur',
      salary: 700000,
      tax: 23000,
      isExpanded: false,
    },
    {
      id: 113,
      name: 'Marvel',
      phone: '123454321',
      city: 'Ranchi',
      salary: 900000,
      tax: 13000,
      isExpanded: false,
    },
    {
      id: 114,
      name: 'IronPatriot',
      phone: '456787654',
      city: 'Jaunpur',
      salary: 890000,
      tax: 53000,
      isExpanded: false,
    },
    {
      id: 115,
      name: 'Loki',
      phone: '987656789',
      city: 'Patna',
      salary: 840000,
      tax: 43000,
      isExpanded: false,
    },
    {
      id: 116,
      name: 'Natasha',
      phone: '6574564324',
      city: 'Kanpur',
      salary: 700000,
      tax: 23000,
      isExpanded: false,
    },
  ];
  constructor(public dialog: MatDialog,private router: ActivatedRoute) {
    this.id = this.router.snapshot.params['id'];
    this.currentComponent = this.componentArray.filter((res:any)=>{
      if (this.id == res.id){
        return res;
      }
    })
  }

  cardClickedDialog(ev: any) {
    switch (ev) {
      //Confirmation popup
      case 1:
        this.dialog
          .open(ModalComponent, {
            panelClass: '',
            data: {
              isConfiramtion: true,
              headerTitle: 'Confirmation',
              dialogMessage: 'Are you sure you want to Exit ?',
            },
          })
          .afterClosed()
          .subscribe((res) => {
            if (res) {
              console.log('dialog Close resp', res);
            }
          });
        break;

      // Comment popup
      case 2:
        this.dialog
          .open(ModalComponent, {
            panelClass: '',
            data: {
              isComment: true,
              headerTitle: 'Comment',
              pText: 'Submit',
            },
          })
          .afterClosed()
          .subscribe((res) => {
            if (res) {
              console.log('dialog Close resp', res);
            }
          });
        break;

      // Form-popup
      case 3:
        break;

      //message-popup
      case 4:
        break;

      default:
      //Do Nothing now
    }
  }

  cardClickedForms(ev: any) {
    switch (ev) {
      // single col form
      case 1:
        this.dialog
          .open(FormsComponent, {
            panelClass: ['form-body', 'wd40'],
            data: {
              headerTitle: 'Register',
              pText: 'Submit',
              singleColumn: true,
              fieldName: {
                FirstName: ['', Validators.required],
                LastName: [''],
                Phone: ['', Validators.required],
                Address: ['', Validators.required],
                Email: [''],
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
        break;

      // double col form
      case 2:
        this.dialog
          .open(FormsComponent, {
            panelClass: ['form-body', 'wd60'],
            data: {
              headerTitle: 'Register',
              doubleColumn: true,
              pText: 'Submit',
              fieldName: {
                FirstName: ['', Validators.required],
                LastName: [''],
                Phone: ['', Validators.required],
                Address: ['', Validators.required],
                Email: [''],
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
        break;
      // double col form
      case 3:
        this.dialog
          .open(FormsComponent, {
            panelClass: ['form-body', 'wd80'],
            data: {
              headerTitle: 'Register',
              tripleColumn: true,
              pText: 'Submit',
              fieldName: {
                FirstName: ['', Validators.required],
                LastName: [''],
                Phone: ['', Validators.required],
                Address: ['', Validators.required],
                Email: [''],
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
        break;
      case 4:
        this.dialog
          .open(FormsComponent, {
            panelClass: ['form-body', 'wd40'],
            data: {
              headerTitle: 'Option Select',
              optionfield: true,
              optionLabel: 'foods',
              pText: 'Submit',
              options: {
                fruits: ['Apple', 'Banana', 'Mango', 'Orange'],
                vegetables: ['Potato', 'Tomato', 'pumpkin', 'carrot'],
              },
              fieldName: {
                fruits: ['', Validators.required],
                vegetables: [''],
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
        break;
      case 5:
        this.dialog
          .open(FormsComponent, {
            panelClass: ['form-body', 'wd40'],
            data: {
              headerTitle: 'Option Select',
              multipleOptionfield: true,
              optionLabel: 'foods',
              pText: 'Submit',
              options: {
                fruits: ['Apple', 'Banana', 'Mango', 'Orange'],
                vegetables: ['Potato', 'Tomato', 'pumpkin', 'carrot'],
              },
              fieldName: {
                fruits: ['', Validators.required],
                vegetables: [''],
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
        break;
      default:
      //Do Nothing now
    }
  }

  cardClickedTables(ev: any) {
    this.sampleColumn = this.sampleColumn.filter(item=> item !== 'expand')
    switch (ev) {
      case 1:
        this.dialog
          .open(TablesComponent, {
            panelClass: ['form-body', 'wd60', 'ht80'],
            data: {
              headerTitle: 'Table 1 (Simple Table)',
              table1: true,
              dataSource: {
                columnDetails: this.sampleColumn,
                details: this.sampleDetails,
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
        break;
      case 2:
        this.dialog
          .open(TablesComponent, {
            panelClass: ['form-body', 'wd60', 'ht80'],
            data: {
              headerTitle: 'Table 2 (With Sticky Header)',
              table2: true,
              dataSource: {
                columnDetails: this.sampleColumn,
                details: this.sampleDetails,
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
        break;
      case 3:
        this.dialog
          .open(TablesComponent, {
            panelClass: ['form-body', 'wd60', 'ht80'],
            data: {
              headerTitle: 'Table 3 (With footer)',
              table3: true,
              dataSource: {
                columnDetails: this.sampleColumn,
                details: this.sampleDetails,
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
        break;
      case 4:
        this.dialog
          .open(TablesComponent, {
            panelClass: ['form-body', 'wd60', 'ht80'],
            data: {
              headerTitle: 'Table 4 (With pagination)',
              table4: true,
              dataSource: {
                columnDetails: this.sampleColumn,
                details: this.sampleDetails,
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
        break;
      case 5:
        this.dialog
          .open(TablesComponent, {
            autoFocus: false,
            panelClass: ['form-body', 'wd60', 'ht80'],
            data: {
              headerTitle: 'Table 5 (With Search Field)',
              table5: true,
              searchField: true,
              dataSource: {
                columnDetails: this.sampleColumn,
                details: this.sampleDetails,
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
        break;
      case 6:
          this.dialog
            .open(TablesComponent, {
              autoFocus: false,
              panelClass: ['form-body', 'wd60', 'ht80'],
              data: {
                headerTitle: 'Table 6 (With Sorting Field)',
                table6: true,
                dataSource: {
                  columnDetails: this.sampleColumn,
                  details: this.sampleDetails,
                },
              },
            })
            .afterClosed()
            .subscribe((res) => {
              console.log(res);
            });
          break;
      case 7:
        this.dialog
          .open(TablesComponent, {
            autoFocus: false,
            panelClass: ['form-body', 'wd60', 'ht80'],
            data: {
              headerTitle: 'Table 7 (With Checkbox Field)',
              table7: true,
              submitEnabled:true,
              dataSource: {
                columnDetails: this.sampleColumn,
                details: this.sampleDetails,
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
        break;
      case 8:
        this.sampleColumn.push('expand')
          this.dialog
            .open(TablesComponent, {
              autoFocus: false,
              panelClass: ['form-body', 'wd60', 'ht80'],
              data: {
                headerTitle: 'Table 8 (With expanded Field)',
                table8: true,
                dataSource: {
                  columnDetails: this.sampleColumn,
                  details: this.sampleDetails,
                },
              },
            })
            .afterClosed()
            .subscribe((res) => {
              console.log(res);
            });
          break;
      default:
      //Do Nothing now
    }
  }

  cardClickedSnackbar(ev:any){
    this.showSnackbar = true;
    this.counter+=1;
    switch (ev) {
      case 1:
       this.horizontalpos = 'left';
       this.verticalpos = 'top'
       break;
     case 2:
       this.horizontalpos = 'center';
       this.verticalpos = 'top'
       break;
     case 3:
       this.horizontalpos = 'right';
       this.verticalpos = 'top'
       break;
     case 4:
       this.horizontalpos = 'left';
       this.verticalpos = 'bottom'
       break;
     case 5:
        this.horizontalpos = 'center';
        this.verticalpos = 'bottom'
        break;
    case 6:
      this.horizontalpos = 'right';
      this.verticalpos = 'bottom'
      break;

    }
  }

  cardClickedCharts(ev:any){
    switch (ev) {
      case 1:
        this.dialog
          .open(ChartsComponent, {
            panelClass: ['form-body', 'wd60', 'ht70'],
            data: {
              headerTitle: 'Bar Graph',
              id:'barGraph001',
              barGraph: true,
              dataSource: {
                values:[
                  {
                    x: this.sampleDetails.map(res=>{return res.name}),
                    y: this.sampleDetails.map(res=>{return res.salary}),
                    type: 'bar'
                  }
                ],
                layout:{
                  autosize:true,
                  title: 'Bargraph with Single bar',
                 },
                config: {responsive: true}
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
       break;
       case 2:
        this.dialog
          .open(ChartsComponent, {
            panelClass: ['form-body', 'wd60', 'ht70'],
            data: {
              headerTitle: 'Bar Graph',
              id:'barGraph001',
              barGraph: true,
              dataSource: {
                values:[
                  {
                    x: this.sampleDetails.map(res=>{return res.name}),
                    y: this.sampleDetails.map(res=>{return res.salary}),
                    type: 'bar',
                    name: 'Salary',
                  },
                  {
                    x: this.sampleDetails.map(res=>{return res.name}),
                    y: this.sampleDetails.map(res=>{return res.tax}),
                    type: 'bar',
                    name: 'Tax',
                  }
                ],
                layout:{
                  autosize:true,
                  title: 'Bargraph with Grouped bar',
                 },
                config: {responsive: true}
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
       break;
       case 3:
        this.dialog
          .open(ChartsComponent, {
            panelClass: ['form-body', 'wd60', 'ht70'],
            data: {
              headerTitle: 'Bar Graph',
              id:'barGraph001',
              barGraph: true,
              dataSource: {
                values:[
                  {
                    x: this.sampleDetails.map(res=>{return res.name}),
                    y: this.sampleDetails.map(res=>{return res.salary}),
                    type: 'bar',
                    name: 'Salary',
                  },
                  {
                    x: this.sampleDetails.map(res=>{return res.name}),
                    y: this.sampleDetails.map(res=>{return res.tax}),
                    type: 'bar',
                    name: 'Tax',
                  }
                ],
                layout:{
                  autosize:true,
                  barmode: 'stack',
                  title: 'Bargraph with Stacked bar',
                 },
                config: {responsive: true}
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
       break;
       case 4:
        this.dialog
          .open(ChartsComponent, {
            panelClass: ['form-body', 'wd60', 'ht70'],
            data: {
              headerTitle: 'Line Graph',
              id:'barGraph001',
              barGraph: true,
              dataSource: {
                values:[
                  {
                    x: this.sampleDetails.map(res=>{return res.name}),
                    y: this.sampleDetails.map(res=>{return res.salary}),
                    type: 'scatter',
                    name: 'Salary',
                  },
                  {
                    x: this.sampleDetails.map(res=>{return res.name}),
                    y: this.sampleDetails.map(res=>{return res.tax}),
                    type: 'scatter',
                    name: 'Tax',
                  }
                ],
                layout:{
                  autosize:true,
                  title: 'Line graph with Scatter points',
                 },
                config: {responsive: true}
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
       break;
       case 5:
        this.dialog
          .open(ChartsComponent, {
            panelClass: ['form-body', 'wd60', 'ht70'],
            data: {
              headerTitle: 'Pie Chart',
              id:'barGraph001',
              barGraph: true,
              dataSource: {
                values:[
                  {
                    labels: this.sampleDetails.map(res=>{return res.name}),
                    values: this.sampleDetails.map(res=>{return res.salary}),
                    type: 'pie',
                    textinfo: "label+percent",
                    insidetextorientation: "radial",
                    textposition: "inside",
                    name: 'Salary',
                  }
                ],
                layout:{
                  autosize:true,
                  title: 'Pie Chart',
                  margin: {"t": 30, "b": 0, "l": 100, "r": 150},
                 },
                config: {responsive: true}
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
       break;
       case 6:
        this.dialog
          .open(ChartsComponent, {
            panelClass: ['form-body', 'wd60', 'ht70'],
            data: {
              headerTitle: 'Donut Chart',
              id:'barGraph001',
              barGraph: true,
              dataSource: {
                values:[
                  {
                    labels: this.sampleDetails.map(res=>{return res.name}),
                    values: this.sampleDetails.map(res=>{return res.tax}),
                    type: 'pie',
                    textinfo: "label+percent",
                    insidetextorientation: "radial",
                    textposition: "inside",
                    name: 'Salary',
                    hole: .4,
                  }
                ],
                layout:{
                  autosize:true,
                  title: 'Donut Chart',
                  margin: {"t": 30, "b": 0, "l": 100, "r": 150},
                  annotations: [
                    {
                      font: {
                        size: 20
                      },
                      showarrow: false,
                      text: 'Tax details',

                    }
                  ]
                 },
                config: {responsive: true}
              },
            },
          })
          .afterClosed()
          .subscribe((res) => {
            console.log(res);
          });
       break;
    }
  }

}
