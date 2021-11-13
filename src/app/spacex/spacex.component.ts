import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.css']
})
export class SpacexComponent implements OnInit {

  data: any;
  link = 'https://api.spacexdata.com/v3/missions'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.link).subscribe((responseData: any) => {
      //console.log(responseData)
      this.data = responseData;
    })
  }
  title = 'SpaceX';

}
