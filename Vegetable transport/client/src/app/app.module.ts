import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmersComponent } from './components/farmers/farmers.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { CollectComponent } from './components/collect/collect.component';
import { InvoicesComponent } from './components/invoices/invoices.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmersComponent,
    CollectionComponent,
    ExpensesComponent,
    CollectComponent,
    InvoicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
