import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeDisplayComponent } from './recipe/recipe-display/recipe-display.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeEditComponent,
    RecipeDisplayComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
