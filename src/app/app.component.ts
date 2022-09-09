import { Component } from '@angular/core';
import { GetRequest, MainResponse, Response } from './_models/all.model';
import { HttpProviders } from './_services/http.provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  req: GetRequest = new GetRequest()

  responses?: Response[] = []

  constructor(private api: HttpProviders) { }

  ngOnInit() {
    this.GetLocation()
  }

  GetLocation() {
    navigator.geolocation.getCurrentPosition((position: any) => {
      if (position) {
        this.req.latitude = position.coords.latitude;
        this.req.longitude = position.coords.longitude;
        this.GetFeed()
      }
    },
      (error: any) => {
        this.req.latitude = 40.8531172
        this.req.longitude = 31.1175791
        this.GetFeed()
      });

  }

  GetFeed() {
    this.api.GetFeed(this.req).subscribe(data => {
      if (data) {
        let dizi: any[] = data.response!

        dizi.forEach(element => {
          this.responses?.push(element)
        });
      }
    })
  }

  GetDistance(lat2: number, lon2: number) {
    let lat1: number = this.req.latitude!
    let lon1: number = this.req.longitude!
    var p = 0.017453292519943295;
    var a = 0.5 -
      Math.cos((lat2 - lat1) * p) / 2 +
      Math.cos(lat1 * p) * Math.cos(lat2 * p) * (1 - Math.cos((lon2 - lon1) * p)) / 2;
    var fark = 12742 * Math.asin(Math.sqrt(a))
    return (fark.toString().includes('.') && fark.toString().split('.')[0].length >= 3 ? fark.toString().split('.')[0] : (fark.toString().includes('.') && fark.toString().split('.')[1].length >= 2 ? fark.toString().split('.')[0] + '.' + fark.toString().split('.')[1].substring(0, 2) : fark));
  }
}
