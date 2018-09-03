import {Component, Input, OnInit} from '@angular/core';
import {EmployeeSummaryCard} from '../../model/employee-summary-details.model';

@Component({
  selector: 'app-employee-card-row',
  templateUrl: './employee-card-row.component.html',
  styleUrls: ['./employee-card-row.component.css']
})
export class EmployeeCardRowComponent implements OnInit {

  @Input() employeeSummary: EmployeeSummaryCard[];

  constructor() {
  }

  ngOnInit() {
  }

}
