import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-parent',
  templateUrl: './sample-parent.component.html',
  styleUrls: ['./sample-parent.component.css']
})
export class SampleParentComponent implements OnInit {
  usrmsg:string;
  constructor() { }

  ngOnInit(): void {
  }

}
