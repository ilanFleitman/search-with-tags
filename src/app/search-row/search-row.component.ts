import {Component, ElementRef, OnInit, Renderer, ViewChild} from '@angular/core';
import {Tag} from './tag';

@Component({
  selector: 'app-search-row',
  templateUrl: './search-row.component.html',
  styleUrls: ['./search-row.component.css']
})
export class SearchRowComponent implements OnInit {
  @ViewChild('focusoble') focus: any;
  selectedTags: Tag[] = [];
  textValue: string;
  constructor(private renderer: Renderer) { }

  ngOnInit() {
  }
  addTag(value: string) {
    this.selectedTags.push(new Tag(value, 'red'));
    this.textValue = '';
  }

  removeTag(event: KeyboardEvent) {
    if (event.keyCode === 8 && this.textValue === '') {
      this.selectedTags.splice(this.selectedTags.length - 1, 1);
    }
  }

  focusOn() {
    this.focus.nativeElement.focus();
  }

}
