import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dealer-list/dealer-list.module').then(m => m.DealerListModule)
    //can you here login page
  },
  {
    path: 'dealerList',
    loadChildren: () => import('./dealer-list/dealer-list.module').then(m => m.DealerListModule)
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
