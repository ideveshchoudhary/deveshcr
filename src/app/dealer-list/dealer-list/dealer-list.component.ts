import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DealerService } from 'src/app/dealer.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dealer-list',
  templateUrl: './dealer-list.component.html',
  styleUrls: ['./dealer-list.component.scss']
})
export class DealerListComponent implements OnInit {
  active = 1;
  allDealers: any[] = [];
  dealerlist!: FormGroup;
  constructor(private fb: FormBuilder, private api: DealerService) {
    this.dealerlist = this.fb.group({
      emploeId: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      pnumber: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),

    })
  }

  ngOnInit(): void {
    this.getAllUsersData();


  }

  onClick() {
    var type = this.dealerlist.value.id == null ? 'Add' : 'update';
    this.api.addUpdateUser(this.dealerlist.value, type).subscribe((res) => {
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      });
      if (type == 'Add') {
        Swal.fire({
          icon: 'success',
          title: 'User (' + this.dealerlist.value.name + ') Saved Successfully',
        })
      } else {
        alert("Updated")

      }
      console.log("hello", res);
      this.dealerlist.reset()
      this.getAllUsersData();
    })

    console.log(this.dealerlist.value);
  }

  getAllUsersData() {
    this.api.getAllDealer().subscribe(data => {
      this.allDealers = data;
      console.log(data);

    })
  }

  editUser(id: any) {
    this.api.editUser(id).subscribe(res => {
      this.active = 1;
      this.dealerlist.patchValue({
        id: res.id,
        emploeId: res.emploeId,
        name: res.name,
        pnumber: res.pnumber,
        address: res.address,
      });
      // Swal.fire({
      //   icon: 'success',
      //   title: "Do you want to edit?",
      //   showCloseButton: true,
      //   showCancelButton: true,
      //   focusConfirm: false,
      // })
      console.log("user edit", res);

      this.dealerlist.patchValue({
        emploeId: res.emploeId,
        name: res.name,
        pnumber: res.pnumber,
        address: res.address,
      })

    })
  }

  deleteSingleUser(id: any) {
    // debugger
    this.api.deleteADealer(id).subscribe(res => {
      Swal.fire('Deleted!', '', 'success')
      this.getAllUsersData();
    })
  }
}

