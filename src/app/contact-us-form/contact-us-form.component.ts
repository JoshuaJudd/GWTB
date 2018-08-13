import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Console } from '../../../node_modules/@angular/core/src/console';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {

  email = '';
  subject = '';
  order = '';

  EmailJsonObject$: Object;
  NewEmail: Object;
  EmailArray: Array<Object>;

  constructor(private data: DataService) { }

  ngOnInit() { 
    this.data.getEmails().subscribe(
      data => this.EmailJsonObject$ = data
    )
  }

  addEmail(value: string) {
    this.email = value;
    this.createEmail();
  }

  addSubject(value: string) {
    this.subject = value;
    this.createEmail();
  }

  addOrder(value: string) {
    this.order = value;
    this.createEmail();
  }

  createEmail() {
    this.NewEmail = {
      "EmailSender" : this.email,
      "EmailSubject" : this.subject,
      "EmailMessage" : this.order
    }
  }

  sendEmail() {
    this.EmailArray.push(this.NewEmail);
  }
}