import { Component } from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jsonValue= 'Hello World';



  userObject = {
    name: "nicht Jonas",
    age: "19",
    id: 0
  }

  constructor(private httpService: HttpService) {
  }

  handleEvent(event: any) {
    console.log(event);
  }



}
