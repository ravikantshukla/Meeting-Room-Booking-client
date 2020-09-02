import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Room } from 'src/app/model/Room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms:Array<Room>;
  constructor(private dataService :DataService) { 
    this.rooms = this.dataService.rooms;
  }

  ngOnInit(): void {
  }

}
