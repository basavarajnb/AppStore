import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {
  @Input()
  set selected(val) {
    this.selectedChanged(val);
  };

  developerMode = false;

  selectedItem: any;
  currentTab = '1';

  appORdevList = [];

  resultList = [];

  headers = {
    h1: '',
    h2: '',
    h3: '',
    h4: '',
  };

  constructor(private router: Router) { }

  selectedChanged(val) {
    this.selectedItem = val;
    if (this.selectedItem === 'developer') {
      this.headers.h1 = 'All';
      this.headers.h2 = 'Approve Developer';
      this.headers.h3 = 'Approved';
      this.headers.h4 = 'Rejected';
      this.developerMode = true;
      this.appORdevList = [];
      this.developerList.forEach((el) => {
        this.appORdevList.push(el);
      });

    } else if (this.selectedItem === 'application') {
      this.headers.h1 = 'All';
      this.headers.h2 = 'Approve App';
      this.headers.h3 = 'Approved';
      this.headers.h4 = 'Rejected';
      this.developerMode = false;
      this.appORdevList = [];
      this.appList.forEach((el) => {
        this.appORdevList.push(el);
      });
    }
    this.resultList = [];
    this.appORdevList.forEach((el) => {
      this.resultList.push(el);
    });
  }
  ngOnInit() {

  }

  viewDashboard() {
    this.router.navigate(['/dashboard']);
  }

  approveClick(item) {
    item.state = 'approved';

  }
  rejectClick(item) {
    item.state = 'rejected';

  }

  headerSelect(index) {
    if (index === 1) {
      this.currentTab = '1';
      this.resultList = [];
      this.appORdevList.forEach((el) => {
        this.resultList.push(el);
      });

    } else if (index === 2) {
      this.currentTab = '2';
      this.resultList = [];
      this.appORdevList.forEach((el) => {
        if (el.state === "new") {
          this.resultList.push(el);
        }
      });

    } else if (index === 3) {
      this.currentTab = '3';
      this.resultList = [];
      this.appORdevList.forEach((el) => {
        if (el.state === "approved") {
          this.resultList.push(el);
        }
      });

    } else if (index === 4) {
      this.currentTab = '4';
      this.resultList = [];
      this.appORdevList.forEach((el) => {
        if (el.state === "rejected") {
          this.resultList.push(el);
        }
      });

    }
  }

  developerList = [
    {
      id: '1',
      name: 'ABC',
      designation: 'AAA',
      state: 'new',
    },
    {
      id: '2',
      name: 'DEF',
      designation: 'DDD',
      state: 'new',
    },
    {
      id: '3',
      name: 'GHI',
      designation: 'GGG',
      state: 'new',
    },
    {
      id: '4',
      name: 'JKL',
      designation: 'JJJ',
      state: 'new',
    }, {
      id: '5',
      name: 'LMN',
      designation: 'PPP',
      state: 'new',
    },
    {
      id: '6',
      name: 'OPQ',
      designation: 'OOO',
      state: 'new',
    }
  ];

  appList = [
    {
      name: 'App Name',
      image: 'extension',
      downloads: '1000',
      state: 'new',
      rating: '4.5'
    },
    {
      name: 'App Name2',
      image: 'extension',
      downloads: '1450',
      state: 'approved',
      rating: '3'
    },
    {
      name: 'App Name3',
      image: 'extension',
      downloads: '15400',
      state: 'new',
      rating: '3.5'
    },
    {
      name: 'App Name4',
      image: 'extension',
      downloads: '1050',
      state: 'approved',
      rating: '5'
    },
    {
      name: 'App Name5',
      image: 'extension',
      downloads: '180',
      state: 'new',
      rating: '3'
    },
    {
      name: 'App Name',
      image: 'extension',
      downloads: '1000',
      state: 'rejected',
      rating: '4.5'
    },
    {
      name: 'App Name2',
      image: 'extension',
      downloads: '1450',
      state: 'rejected',
      rating: '3'
    },
  ];

}
