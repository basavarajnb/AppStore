import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.css']
})
export class CardDeckComponent implements OnInit {
  @Input() appList: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
