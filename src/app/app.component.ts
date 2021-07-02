import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-get-turns';

constructor(private router : Router){
}
  hidden : string = '';
  init() : void {
    this.hidden = 'hidden';
    this.router.navigateByUrl('generateTurn');
  }
}
