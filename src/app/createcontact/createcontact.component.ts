import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css']
})
export class CreatecontactComponent implements OnInit {

  contact:Contact=new Contact();
  constructor(private contactservice:ContactService,private router:Router){

  }
  ngOnInit(): void {
  }
  
  savecontact() {
    this.contactservice.addcontact(this.contact).subscribe(data=>{
      console.log(data);
      this.redirectto();
    },
    error=>{
      console.log(error);
    }
    )
  }
  redirectto() {
    this.router.navigate(["/getcontacts"]);
  }
}
