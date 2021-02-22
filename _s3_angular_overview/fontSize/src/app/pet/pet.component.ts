import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petName: 'puppie';
  petImage: 'https://james.codegym.vn/pluginfile.php/37397/mod_assign/intro/thu1.png';

  constructor() { }
  updateName(newPetName){
    this.petName = newPetName;
  }
  updateImage(linkImage){
    this.petImage = linkImage;
  }

  ngOnInit(): void {
  }

}
