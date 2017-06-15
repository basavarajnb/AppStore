import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {
  @Input() dashListEntry;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  viewDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
