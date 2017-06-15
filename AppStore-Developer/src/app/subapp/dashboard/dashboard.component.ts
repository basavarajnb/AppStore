import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardView = true;
  selected= '';
  constructor() { }

  ngOnInit() {
  }

  ondashEntryClick(dashEntry) {
    this.selected = dashEntry;
    this.dashboardView = false;

  }

  viewDashboard() {
    this.dashboardView = true;
  }


  dashEntry = [
    {
      name: "All",
      count: "23",
      image: "view_list"
    },
    {
      name: "Uploaded",
      count: "7",
      image: "file_upload"
    },
    {
      name: "Approved",
      count: "7",
      image: "done"
    },
    {
      name: 'Rejected',
      count: '10',
      image: 'clear'
    }
  ];

  dashListEntry = [
    {
      name: 'App Name',
      image: 'extension',
      downloads: '1000',
      rating: '4.5'
    },
    {
      name: 'App Name2',
      image: 'extension',
      downloads: '1450',
      rating: '3'
    },
    {
      name: 'App Name3',
      image: 'extension',
      downloads: '15400',
      rating: '3.5'
    },
    {
      name: 'App Name4',
      image: 'extension',
      downloads: '1050',
      rating: '5'
    },
    {
      name: 'App Name5',
      image: 'extension',
      downloads: '180',
      rating: '3'
    },
  ];

}
