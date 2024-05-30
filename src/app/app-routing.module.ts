import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dealer-list/dealer-list.module').then(m => m.DealerListModule)
  },

  {
    path: 'form',
    loadChildren: () => import('./dealer-form/dealer-form.module').then(m => m.DealerFormModule)
  },
  {
    path: 'dealerList',
    loadChildren: () => import('./dealer-list/dealer-list.module').then(m => m.DealerListModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./edit-dealer/edit-dealer.module').then(m => m.EditDealerModule)
  },
  {
    path: '**',
    loadChildren: () => import('./dealer-list/dealer-list.module').then(m => m.DealerListModule)
    //can use here 404 not found
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
