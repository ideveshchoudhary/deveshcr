import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealerFormRoutingModule } from './dealer-form-routing.module';
import { DealerFormComponent } from './dealer-form/dealer-form.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DealerFormComponent
  ],
  imports: [
    CommonModule,
    DealerFormRoutingModule, NgbNavModule, ReactiveFormsModule
  ]
})
export class DealerFormModule { }
