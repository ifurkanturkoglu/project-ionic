import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  person: any[]=['a','b','c'];
  groups: any[]=['d1','e','f']
  controller=true;
  constructor() { }

  ngOnInit() {
  }
  groupsChange(){
    this.controller =!this.controller;
    console.log(this.controller)
  }
}
