import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ProductsTableComponent } from './products-table.component';

@NgModule({
  imports: [MatTableModule, CommonModule, MatCardModule],
  declarations: [ProductsTableComponent],
  providers: [],
  exports: [ProductsTableComponent],
})
export class ProductsTableComponentModule {}
