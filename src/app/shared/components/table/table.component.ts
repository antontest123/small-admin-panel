import { AfterViewInit, ChangeDetectorRef, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})

export class TableComponent implements AfterViewInit {
  @Input() tableData!: any;
  @Input() columns!: any;
  matRippleRadius = 100;

  displayedColumns!: string[];
  dataSource = new MatTableDataSource(this.tableData);
  isClicked = false;
  clickedRow?: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cdr: ChangeDetectorRef) {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.data = this.tableData;
    this.dataSource.paginator = this!.paginator;
    this.dataSource.sort = this.sort;
    this.displayedColumns = this.columns;
    this.cdr.detectChanges();
  }
}
