import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  contactFormUrl = 'http://localhost:8080/contact-us';

  constructor(private http: HttpClient) { }

  sendContactForm(contactForm : any) : Observable<any> {
    return this.http.post(this.contactFormUrl, contactForm);
  }

}
