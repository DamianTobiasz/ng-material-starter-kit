import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoChipsListComponent } from './components/crypto-chips-list/crypto-chips-list.component';
import { PublicHolidaysSelectComponent } from './components/public-holidays-select/public-holidays-select.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsListComponentModule } from './components/crypto-chips-list/crypto-chips-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysSelectComponentModule } from './components/public-holidays-select/public-holidays-select.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'categories',
        component: CategoryListComponent,
      },
      {
        path: 'crypto',
        component: CryptoChipsListComponent,
      },
      {
        path: 'public-holidays',
        component: PublicHolidaysSelectComponent,
      },
    ]),
    ProductListComponentModule,
    ProductsServiceModule,
    CategoryListComponentModule,
    CategoriesServiceModule,
    CryptoChipsListComponentModule,
    CryptoServiceModule,
    PublicHolidaysSelectComponentModule,
    PublicHolidaysServiceModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
