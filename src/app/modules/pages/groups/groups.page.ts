import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  person: any[]=['Furkan','Mehmet','Betül','Hasan'];
  groups: any[]=['DDL','FFSQUAD','Staj'];
  controller=true;
  searchTerm: string ;
  constructor() { }

  ngOnInit() {
  }
  groupsChange(){
    this.controller =!this.controller;
    console.log(this.controller);
  }
}
