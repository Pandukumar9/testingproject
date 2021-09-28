import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() fromparent:string="";
  @Output() childmsg = new  EventEmitter();
  ngOnInit(): void {
  }

  @Input() firstName: string ='';
  @Output() myEvent = new EventEmitter();

  sendBack() {
    this.myEvent.emit({name: 'Back.! ' + this.firstName});
  }

  callmethod(){
     this.childmsg.emit("hello this is child msg");
  }

  arraydata:any[]=
  [
    {
      color: "red",
      value: "#f00"
    },
    {
      color: "green",
      value: "#0f0"
    },
    {
      color: "blue",
      value: "#00f"
    },
    {
      color: "cyan",
      value: "#0ff"
    },
    {
      color: "magenta",
      value: "#f0f"
    },
    {
      color: "yellow",
      value: "#ff0"
    },
    {
      color: "black",
      value: "#000"
    }
  ];
}
