import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DealerService } from 'src/app/dealer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-dealer',
  templateUrl: './edit-dealer.component.html',
  styleUrls: ['./edit-dealer.component.scss']
})
export class EditDealerComponent implements OnInit {

  dealerId!: number;
  dealer: any;
  dealerForm!: FormGroup;


  constructor(private route: ActivatedRoute, private api: DealerService, private router: Router, private fb: FormBuilder) {
    this.dealerForm = this.fb.group({
      name: new FormControl('', Validators.required),
      mobile_no: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      company_name: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dealerId = params['id'];
      // this.getDealerDetails();
    });
  }

  getDealerDetails(): void {
    this.api.editDealer(this.dealerId).subscribe((res: any) => {
      this.dealer = res;
    });
  }


  updateDealer(): void {
    this.api.updateDealer(this.dealerId, this.dealer).subscribe(
      (res: any) => {
        Swal.fire('Success', 'Dealer details updated successfully.', 'success');
        // Redirect to dealer list or any other page after successful update
        this.router.navigate(['/dealer-list']);
      },
      (error) => {
        console.error("Error updating dealer:", error);
        Swal.fire('Error', 'Failed to update dealer details.', 'error');
      }
    );

  }
}
