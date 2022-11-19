import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

export const DISPLAYED_COLUMNS = ['image', 'title', 'category', 'price'];

@Component({
  selector: 'app-products-table',
  styleUrls: ['./products-table.component.scss'],
  templateUrl: './products-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsTableComponent {
  readonly products$: Observable<ProductModel[]> =
    this._productsService.getAll();
  readonly displayedColumns = DISPLAYED_COLUMNS;

  constructor(private _productsService: ProductsService) {}
}
