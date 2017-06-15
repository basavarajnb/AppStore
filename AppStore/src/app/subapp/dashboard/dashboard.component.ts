import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardView = true;

  constructor() { }

  ngOnInit() {
  }

  ondashEntryClick(dashEntry) {
    this.dashboardView = false;

  }

  viewDashboard() {
    this.dashboardView = true;
  }


  dashEntry = [
    {
      name: "Downloaded",
      count: "23",
      image: "file_download"
    },
    {
      name: "Favourites",
      count: "7",
      image: "star"
    },
    {
      name: 'Rated',
      count: '10',
      image: 'rate_review'
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
