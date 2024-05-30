import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDealerComponent } from './edit-dealer/edit-dealer.component';

const routes: Routes = [
  {
    path: '',
    component: EditDealerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditDealerRoutingModule { }
