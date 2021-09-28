import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testingproject';
  static: any[] = [
    {
      name: 'one',
      id: '1',
    },
    {
      name: 'two',
      id: '2',
    },
  ];
  // constructor(public dialog: MatDialog) {
    // this.setToolbaarDialog();
  // }

  // setToolbaarDialog(): void {
  //   this.dialogToolbar = this.dialog.open(SlideInToolbar, {
  //     width: '150px',
  //     data: { items: this.static },
  //   });
  userlist: any[] = ['pandu', 'sai', 'anil', 'gopi', 'srikar'];

  name = 'Paresh Gami';
  backName = '';
  callFunction(e:any) {
    this.backName = e.name;
  }

  parentmsg:string="this is parent msg";
  msg:string="";

  fromchild(data:any){
   alert(data)
  }
}
