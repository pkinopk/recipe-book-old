import { Component, OnInit } from '@angular/core';
import { RecipeManagementService } from '../recipe-management.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor(public service: RecipeManagementService) {}

  ngOnInit() {}
}
