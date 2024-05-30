import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  editdealer: any[] = [];
  constructor(private api: DealerService, private router: Router) { }


  ngOnInit(): void {
    this.getAlldeal();
  }


  getAlldeal() {
    this.api.getAllData().subscribe((res: any) => {
      this.allDealers = res;
      console.log('res', res);
    })
  }

  editDealer(dealerId: number, updatedData: any): void {
    this.api.updateDealer(dealerId, updatedData).subscribe(
      (dealer: any) => {
        console.log(dealer);
        this.router.navigate(['/edit', dealerId], { state: { dealer } });
      },
      (error) => {
        console.error("Error editing dealer:", error);
        Swal.fire('Error', 'Failed to edit dealer details.', 'error');
      }
    );
  }



  deleteSingleUser(id: number) {
    this.api.deleteDealer(id).subscribe(
      (res: any) => {
        Swal.fire('Deleted!', 'Dealer deleted successfully.', 'success');
        this.getAlldeal();
      },
      (error) => {
        console.error("Error deleting dealer:", error);
        Swal.fire('Error', 'Failed to delete dealer.', 'error');
      }
    );
  }
}

