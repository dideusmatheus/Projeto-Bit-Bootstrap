import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-message',
  templateUrl: './crud-message.component.html'
})
export class CrudMessageComponent implements OnInit {

  @Input() text = '';

  constructor() { }

  ngOnInit(): void {
  }

}
