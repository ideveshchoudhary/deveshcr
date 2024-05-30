import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DealerService } from 'src/app/dealer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dealer-form',
  templateUrl: './dealer-form.component.html',
  styleUrls: ['./dealer-form.component.scss']
})
export class DealerFormComponent {
  active = 1;
  dealerlist!: FormGroup;

  constructor(private api: DealerService, private fb: FormBuilder) {
    this.dealerlist = this.fb.group({
      userid: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      mobile_no: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      company_name: new FormControl('', Validators.required),
    })
  }

  onClick() {
    const userData = this.dealerlist.value;

    console.log("Submitting data:", userData);

    this.api.addNewDealer(userData).subscribe(
      (res) => {
        Swal.fire({
          icon: 'success',
          title: 'User (' + userData.name + ') Saved Successfully',
        });
        console.log("Response from server:", res);
        this.dealerlist.reset();
      },
      (error) => {
        console.error("Error occurred:", error);
        Swal.fire({
          icon: 'error',
          title: 'Failed to save user',
          text: 'An error occurred while saving the user. Please try again later.',
        });
      }
    );
  }


}
