import { Component, OnInit } from '@angular/core';
import { SpacexapiService} from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions_Array = [];

  constructor(private spaceXapi: SpacexapiService) { }

  ngOnInit(): void {
    this.getAllLaunches();
  }

  getAllLaunches(): any {
    this.spaceXapi.getLaunches()
    .subscribe((res:any) => {
      console.log(res);
      this.missions_Array= res;
      
    },
    err => {
      console.log(err);
    })
  }

}
