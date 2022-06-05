import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactedit',
  templateUrl: './contactedit.component.html',
  styleUrls: ['./contactedit.component.css']
})
export class ContacteditComponent implements OnInit {
contact:Contact=new Contact();
id:number=0;
  constructor(private contactservice:ContactService,private router:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getcontact();
  }
  getcontact() {
    this.id=this.activeroute.snapshot.params['id'];
    console.log("update id:"+this.id);
    this.contactservice.findbyid(this.id).subscribe(data=>{
      console.log(data);
      this.contact=data;
    },
    error=>{
      console.log(error);
    }
    );
  }
updatecontact(){
this.contactservice.addcontact(this.contact).subscribe(data=>{
  console.log(data);
this.router.navigate(["getcontacts"]);
},
error=>{
  console.log(error);
}
)
}
}
