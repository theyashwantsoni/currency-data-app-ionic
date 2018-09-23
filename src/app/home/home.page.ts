import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  data :any;
  constructor(private newService:DataService) { }

  ngOnInit() {
    this.newService.getdata().
          subscribe(
            data =>{console.log(data);
              this.data=data; 
              
            }
          );
  }

}
