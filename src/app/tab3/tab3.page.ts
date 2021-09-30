
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})

export class Tab3Page3 implements OnInit {
  email: string = "";
  password: string = "";

  constructor() { }

  ngOnInit() { }

  onSubmit() {
    alert(
     this.email + ', ' + this.password
    )
 }
}