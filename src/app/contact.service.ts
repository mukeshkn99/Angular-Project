import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseurl="https://contactapp-1.herokuapp.com/";
  constructor(private httpclient:HttpClient) { }

  addcontact(contact:Contact):Observable<Object>{
    return this.httpclient.post(`${this.baseurl}/createcontact`,contact,{responseType:"text"});
  }
  findallcontact():Observable<Contact[]>{
 return this.httpclient.get<Contact[]>(`${this.baseurl}/getallcontacts`);
  }
  findbyid(id:number):Observable<Contact>{
    return this.httpclient.get<Contact>(`${this.baseurl}/getcontact/${id}`);
  }
  removecontact(id:number):Observable<Object>{
    return this.httpclient.delete(`${this.baseurl}/deletecontact/${id}`);
  }
}
