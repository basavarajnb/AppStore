import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() categories;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCategoryClick(category) {
    this.router.navigate(['/apps/category/'+ category.categoryTitle]);
  }

}
