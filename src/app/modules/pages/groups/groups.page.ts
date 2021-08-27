import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {
  kisi: any[]=['a','b','c'];
  controller=false;
  constructor() { }

  ngOnInit() {
  }
  groupsChange(){
    this.controller =!this.controller;
  }
}
