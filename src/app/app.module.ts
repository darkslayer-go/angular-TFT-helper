import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamListComponent } from './team-list/team-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { InventoryComponent } from './inventory/inventory.component';
import { HeroComponent } from './heroes-list/hero/hero.component';
import { TeamComponent } from './team-list/team/team.component';
import { MatsListComponent } from './mats-list/mats-list.component';
import { MatComponent } from './mats-list/mat/mat.component';
import { ItemComponent } from './items-list/item/item.component';
import { TftHelperComponent } from './tft-helper/tft-helper.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    HeroesListComponent,
    ItemsListComponent,
    InventoryComponent,
    HeroComponent,
    TeamComponent,
    MatsListComponent,
    MatComponent,
    ItemComponent,
    TftHelperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
