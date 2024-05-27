import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealerService {

  private baseUrl = "http://localhost:3000/dealers";

  constructor(private http: HttpClient) { }

  //All Dealers
  getAllDealer(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }


  //Add new Dealer
  // addUpdateUser(data: any): Observable<any> {
  //   return this.http.post<any>(this.baseUrl, data)
  // }

  addUpdateUser(data: any, type: any): Observable<any> {
    if (type == 'Add') {
      return this.http.post<any>(this.baseUrl, data)
    }
    else {
      return this.http.post<any>(this.baseUrl + data.id, data)

    }
  }

  //UPdate Dealer
  editUser(id: any): Observable<any> {
    // return this.http.get(this.baseUrl + "/" + id)
    return this.http.get(`${this.baseUrl}/${id}`)

  }


  //Delete a Use
  deleteADealer(id: any): Observable<any> {
    // debugger
    return this.http.delete<any>(this.baseUrl + "/" + id)
  }
}
