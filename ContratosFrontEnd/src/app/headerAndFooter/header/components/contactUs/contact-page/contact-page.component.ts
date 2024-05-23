import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ContactUsService} from "../service/contact-us.service";
import {MessageService} from "primeng/api";

@Component({
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private contactUsService : ContactUsService,
              private messaeService: MessageService) {
  }

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.nullValidator]],
    email: ['', [Validators.required, Validators.email, Validators.nullValidator]],
    message: ['', [Validators.required, Validators.nullValidator]]
  });

  ngOnInit() {
  }

  SendMessage() {
    this.contactUsService.sendContactForm(this.contactForm.value).subscribe( () => {
      this.messaeService.add({severity: 'success', summary: 'Success', detail: 'Message sent successfully'});
      console.log('Message sent');
    })
  }
}
