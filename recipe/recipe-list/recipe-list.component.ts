import { Component, OnInit } from '@angular/core';

import { RecipeManagementService } from '../../recipe-management.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(public service: RecipeManagementService) {}

  recipes = this.service.recipes;

  ngOnInit() {}
}
