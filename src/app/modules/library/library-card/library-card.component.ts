import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-card',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.scss']
})
export class LibraryCardComponent implements OnInit {

  constructor() { }
  @Input() cardData:any;
  ngOnInit(): void {
  }

}
