import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-color',
  templateUrl: './input-color.component.html',
  styleUrls: ['./input-color.component.css']
})
export class InputColorComponent implements OnInit {
  color = '#00e067';

  constructor() { }

  ngOnInit(): void {
  }
  onChangeColor(value){
    this.color = value;
  }

}
