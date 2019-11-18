import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('listOfFilters', {static: false}) listOfFilters: ElementRef;
  @ViewChild('actions', {static: false}) actions: ElementRef;

  activatedFilter = {
    'Today': true,
    'Month': false,
    'Year': false,
    'Yesterday': false,
    'Last 7 days': false,
    'This Month': false,
    'Last Month': false,
    'Custom Range': false,
    'showPossibleFilters': false
  }

  filters = [    
    'Today',
    'Month',
    'Year',
    'Yesterday',
    'Last 7 days',
    'This Month',
    'Last Month',
    'Custom Range'
  ]

  ocurrenceList = [
    {'numero': '123456789', 'status': 'Tarm', 'data': '1 hour ago'},
    {'numero': '123456789', 'status': 'Tarm', 'data': '1 hour ago'},
    {'numero': '123456789', 'status': 'Tarm', 'data': '1 hour ago'},
    {'numero': '123456789', 'status': 'Tarm', 'data': '1 hour ago'},
    {'numero': '123456789', 'status': 'Tarm', 'data': '1 hour ago'},
    {'numero': '123456789', 'status': 'Tarm', 'data': '1 hour ago'},
    {'numero': '123456789', 'status': 'Tarm', 'data': '1 hour ago'},
    {'numero': '123456789', 'status': 'Tarm', 'data': '1 hour ago'},
    {'numero': '123456789', 'status': 'Tarm', 'data': '1 hour ago'},
    {'numero': '123456789', 'status': 'Tarm', 'data': '1 hour ago'},
    {'numero': '123456789', 'status': 'Tarm', 'data': '1 hour ago'},
    {'numero': '123456789', 'status': 'Tarm', 'data': '1 hour ago'},
    {'numero': '123456789', 'status': 'Tarm', 'data': '1 hour ago'}
  ]

  constructor(
    private eref: ElementRef
  ) {
    document.addEventListener('click', (event: any) => { 
      if(!this.listOfFilters.nativeElement.contains(event.target) && !this.actions.nativeElement.contains(event.target)) this.activatedFilter['showPossibleFilters'] = false; 
    });
  }

  ngOnInit() {
  }

  disableAllFilters() {
    this.activatedFilter = {
      'Today': false,
      'Month': false,
      'Year': false,
      'Yesterday': false,
      'Last 7 days': false,
      'This Month': false,
      'Last Month': false,
      'Custom Range': false,
      'showPossibleFilters': false
    }
  }

  activateFilter(filterName: string) {
    this.disableAllFilters();
    this.activatedFilter[filterName] = true;
  }

}
