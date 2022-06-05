import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  contact:Contact[]=[];
  constructor(private contactservice:ContactService,private router:Router) { }

  ngOnInit(): void {
    this.getallcontact();
  }
  getallcontact() {
    this.contactservice.findallcontact().subscribe(data=>{
      console.log(data);
      this.contact=data;
    });
      }
      deletecontact(id:number){
        this.contactservice.removecontact(id).subscribe(data=>{
        console.log(data);
        this.getallcontact();
        },
        error=>{
          console.log(error);
        }
        );
      }
      editcontact(id:number){
        this.contactservice.findbyid(id).subscribe(data=>{
          console.log("editedid:"+id);
          this.router.navigate(['/edit/',id]);
        });
      }


}
