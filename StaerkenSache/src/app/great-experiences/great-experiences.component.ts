import { GreatExperiencesService } from './../shared/great-experiences.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-great-experiences',
  templateUrl: './great-experiences.component.html',
  styleUrls: ['./great-experiences.component.scss']
})
export class GreatExperiencesComponent implements OnInit {



  coffees = ['Americano', 'Flat White', 'Cappuccino', 'Latte', 'Espresso', 'Machiato', 'Mocha', 'Hot Chocolate', 'Tea'];

  coffeeOrder = [];
  addCoffee = coffee => this.coffeeOrder.push(coffee);
  removeCoffee = coffee => {
    const index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) {
      this.coffeeOrder.splice(index, 1);
    }
};

  onSubmit  = coffee => {}

  constructor(private greatExperiencesService: GreatExperiencesService) { }

  ngOnInit(): void { }
}
