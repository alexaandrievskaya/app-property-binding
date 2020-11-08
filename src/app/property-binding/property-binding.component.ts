import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  imageSrc = 'https://picsum.photos/825/300/?random';
  imageTitle = 'Title-текст изображения';
  imageAlt = 'Alt-текст изображения';
  isChecked = false;

  constructor() { }

  ngOnInit(): void {
  }

}
