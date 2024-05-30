import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  // private baseUrl = "https://pv.greatfuturetechno.com/pv-api/dealer";

  constructor(private http: HttpClient) { }
  header() {
    let headers = new HttpHeaders({
      // 'Content-Type' : 'application/json; charset=utf-8',
      // 'Accept'       : '*',
      'Authorization': `${'Token 084f2df6319f2729c860fd3d1393840e41f56f00'}`,
    });
    let options = {
      headers: headers
    }
    return options
  }
  //All Dealers
  getAllData() {
    return this.http.get(`https://pv.greatfuturetechno.com/pv-api/dealer/`, this.header())
  }

  //Add new Dealer
  addNewDealer(obj: any) {
    return this.http.post(`https://pv.greatfuturetechno.com/pv-api/dealer/`, obj, this.header())
  }

  // Update dealer details
  editDealer(dealerId: number): Observable<any> {
    return this.http.put(`https://pv.greatfuturetechno.com/pv-api/dealer/?id=`, dealerId, this.header());
  }

  updateDealer(dealerId: number, updatedData: any): Observable<any> {
    return this.http.patch(`https://pv.greatfuturetechno.com/pv-api/dealer/?id=${dealerId}`, updatedData, this.header());
  }

  //Delete a User
  deleteDealer(id: number): Observable<any> {
    return this.http.delete(`https://pv.greatfuturetechno.com/pv-api/dealer/?id=${id}`, this.header());
  }



}
