import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealerListRoutingModule } from './dealer-list-routing.module';
import { DealerListComponent } from './dealer-list/dealer-list.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DealerListComponent
  ],
  imports: [
    CommonModule,
    DealerListRoutingModule, NgbNavModule, ReactiveFormsModule
  ]
})
export class DealerListModule { }
