import { Component, OnInit } from '@angular/core';
import { RecipeManagementService } from '../../recipe-management.service';

@Component({
  selector: 'app-fridge-display',
  templateUrl: './fridge-display.component.html',
  styleUrls: ['./fridge-display.component.css'],
})
export class FridgeDisplayComponent implements OnInit {
  constructor(public service: RecipeManagementService) {}

  ngOnInit() {}
}
