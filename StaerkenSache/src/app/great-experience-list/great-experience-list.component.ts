import { GreatExperiencesService } from './../shared/great-experiences.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-great-experience-list',
  templateUrl: './great-experience-list.component.html',
  styleUrls: ['./great-experience-list.component.scss']
})
export class GreatExperienceListComponent implements OnInit {

  constructor(private greatExperiencesService: GreatExperiencesService) { }

  ngOnInit(): void {
  }

}
