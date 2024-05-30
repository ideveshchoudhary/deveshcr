import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerFormComponent } from './dealer-form/dealer-form.component';

const routes: Routes = [
  {
    path: '',
    component: DealerFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealerFormRoutingModule { }
