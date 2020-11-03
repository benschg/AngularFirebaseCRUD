import { GreatExperiencesService } from './../shared/great-experiences.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-great-experiences',
  templateUrl: './great-experiences.component.html',
  styleUrls: ['./great-experiences.component.scss']
})
export class GreatExperiencesComponent implements OnInit {
  constructor(public greatExperiencesService: GreatExperiencesService) { }


  coffees = ['Americano', 'Flat White', 'Cappuccino', 'Latte', 'Espresso', 'Machiato', 'Mocha', 'Hot Chocolate', 'Tea'];

  coffeeOrder = [];

  ngOnInit(): void { }

  addCoffee = coffee => this.coffeeOrder.push(coffee);
  removeCoffee = coffee => {
    const index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) {
      this.coffeeOrder.splice(index, 1);
    }
  }

  // tslint:disable-next-line: typedef
  onSubmit()  {
    this.greatExperiencesService.form.value.coffeeOrder = this.coffeeOrder;
    const data = this.greatExperiencesService.form.value;

    this.greatExperiencesService.createCoffeeOrder(data)
       .then(res => {
           /*do something here....
           maybe clear the form or give a success message*/
       });
  }

}
