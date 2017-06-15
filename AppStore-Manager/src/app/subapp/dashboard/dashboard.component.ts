import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private sub: any;
  dashboardView = true;
  selected = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let cat = params['category']; // (+) converts string 'id' to a number
      if (cat) {

        this.selectedChanged(cat);
      }


      // In a real app: dispatch action to load the details here.
    });
  }
  selectedChanged(selected: string) {
    selected = selected.toLocaleLowerCase();
    this.dashboardView = false;
    if (selected === 'developer') {
      this.selected = 'developer';
    } else {
      this.selected = 'application';
    }

  }
  ondashEntryClick(dashEntry) {
    if (dashEntry.name === 'Developer') {
      this.selected = 'developer';
    } else {
      this.selected = 'application';

    }
    this.dashboardView = false;

  }

  viewDashboard() {
    this.dashboardView = true;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  dashEntry = [
    {
      name: 'Developer',
      count: '23',
      image: 'person'
    },
    {
      name: 'Application',
      count: '7',
      image: 'rate_review'
    }
  ];

}
