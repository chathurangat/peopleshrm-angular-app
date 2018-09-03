import {Component, OnInit} from '@angular/core';
import {EmployeeSummaryDetails} from '../model/employee-summary-details.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  // employeeSummary: EmployeeSummaryDetails [][];
  //
  // constructor() {
  // }
  //
  // ngOnInit() {
  //   this.employeeSummary = [
  //     [
  //       new EmployeeSummaryDetails('chathuranga1'),
  //       new EmployeeSummaryDetails('chathuranga2'),
  //       new EmployeeSummaryDetails('chathuranga3'),
  //     ],
  //     [
  //       new EmployeeSummaryDetails('chathuranga4'),
  //       new EmployeeSummaryDetails('chathuranga5'),
  //       new EmployeeSummaryDetails('chathuranga6'),
  //     ],
  //     [
  //       new EmployeeSummaryDetails('chathuranga7'),
  //       new EmployeeSummaryDetails('chathuranga8')
  //     ]
  //   ];
  // }


  employeeSummary: EmployeeSummaryDetails[];

  constructor() {
  }

  ngOnInit() {
    this.employeeSummary = [
      new EmployeeSummaryDetails('chathuranga1'),
      new EmployeeSummaryDetails('chathuranga2'),
      new EmployeeSummaryDetails('chathuranga3'),
      new EmployeeSummaryDetails('chathuranga4'),
      new EmployeeSummaryDetails('chathuranga5'),
      new EmployeeSummaryDetails('chathuranga6'),
      new EmployeeSummaryDetails('chathuranga7'),
      new EmployeeSummaryDetails('chathuranga8')
    ];
  }


}
