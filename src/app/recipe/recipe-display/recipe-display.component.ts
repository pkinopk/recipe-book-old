import { Component, OnInit } from '@angular/core';

import { RecipeManagementService } from '../../recipe-management.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-display',
  templateUrl: './recipe-display.component.html',
  styleUrls: ['./recipe-display.component.css'],
})
export class RecipeDisplayComponent implements OnInit {
  constructor(public service: RecipeManagementService) {}

  ngOnInit() {}
}
