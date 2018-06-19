import { Component, OnInit } from '@angular/core';

import { RecipeManagementService } from '../../recipe-management.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  constructor(public service: RecipeManagementService) {}

  ngOnInit() {}
}
