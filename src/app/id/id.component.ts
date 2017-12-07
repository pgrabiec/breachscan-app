import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
