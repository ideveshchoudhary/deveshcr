import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditDealerRoutingModule } from './edit-dealer-routing.module';
import { EditDealerComponent } from './edit-dealer/edit-dealer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditDealerComponent
  ],
  imports: [
    CommonModule,
    EditDealerRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class EditDealerModule { }
