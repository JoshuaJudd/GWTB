import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-baking-tips',
  templateUrl: './baking-tips.component.html',
  styleUrls: ['./baking-tips.component.scss']
})
export class BakingTipsComponent implements OnInit {

  tips$: Object;
  randomNum: number;
  singleTip: string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.randomNum = Math.floor((Math.random() * 5) + 1);

    this.data.getBakingTips().subscribe(
      data => this.tips$ = data
    )
  }
}