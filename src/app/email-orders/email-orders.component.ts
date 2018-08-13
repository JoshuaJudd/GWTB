import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-email-orders',
  templateUrl: './email-orders.component.html',
  styleUrls: ['./email-orders.component.scss']
})
export class EmailOrdersComponent implements OnInit {

  emails$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getEmails().subscribe(
      data => this.emails$ = data
    )
  }

}