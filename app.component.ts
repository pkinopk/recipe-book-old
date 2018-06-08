import { Component, OnInit } from '@angular/core';

import { RecipeManagementService } from './recipe-management.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeManagementService],
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private service: RecipeManagementService) {}

  ngOnInit() {}
}
