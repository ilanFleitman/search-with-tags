import {Component, Input, OnInit} from '@angular/core';
import {Tag} from '../tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  @Input()
  tag:Tag;
  constructor() { }

  ngOnInit() {
  }

}
