import { Routes } from '@angular/router';
import { ListComponent } from './domains/products/pages/list/list.component';
import { ProductDetailComponent } from './domains/products/pages/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path:'',
    component: ListComponent
  },

  {
    path:'product/:id',
    component: ProductDetailComponent
  }


];
