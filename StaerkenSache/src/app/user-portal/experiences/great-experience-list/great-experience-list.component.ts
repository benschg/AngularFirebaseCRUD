import { GreatExperiencesService } from './../great-experiences.service';
import { Component, OnInit } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-great-experience-list',
  templateUrl: './great-experience-list.component.html',
  styleUrls: ['./great-experience-list.component.scss']
})
export class GreatExperienceListComponent implements OnInit {

  coffeeOrders;

  constructor(private greatExperiencesService: GreatExperiencesService) { }

  ngOnInit(): void {
    this.getCoffeeOrders();
  }

  getCoffeeOrders = () =>
  this.greatExperiencesService
    .getCoffeeOrders()
    .subscribe(res => (this.coffeeOrders = res))

    markCompleted = data =>
      this.greatExperiencesService.updateCoffeeOrder(data)

    deleteOrder = data => this.greatExperiencesService.deleteCoffeeOrder(data);


}
