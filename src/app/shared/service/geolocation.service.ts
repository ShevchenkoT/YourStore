import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeolocationService {
  constructor(private http: HttpClient) { }
  getLocation(lac: any, lon: any): Observable<any> {
    return this.http.get<any>(`https://us1.locationiq.com/v1/reverse.php?key=pk.e71596552368598dca9361e2af378741&lat=${lac}&lon=${lon}&format=json`);
  }
}
