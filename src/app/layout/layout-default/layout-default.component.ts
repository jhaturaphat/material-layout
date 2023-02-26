import { Component } from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.scss']
})
export class LayoutDefaultComponent {

  sideBarOpen = false;

  constructor(public mediaObserver: MediaObserver) { 
    let mediaQ = mediaObserver.asObservable().subscribe();
    console.log(mediaQ);
    
  }

  ngOnInit() { }


  sideBarToggler(event:any):void {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
