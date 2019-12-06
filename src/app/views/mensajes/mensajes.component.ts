import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  templateUrl: 'mensajes.component.html'
})

export class MensajesComponent implements OnInit {
  constructor() { }
  ColapseDG: any;
  ColapseDO: any;
  ColapseDB1: any;
  ColapseDB2: any;
  isCollapsed1: boolean = true;
  isCollapsed2: boolean = true;
  isCollapsed3: boolean = true;
  isCollapsed4: boolean = true;

  isCollapsedMain: boolean = true;

  collapsed1(event: any): void {
    this.ColapseDG = true;
  }

  expanded1(event: any): void {
    // console.log(event);
    this.ColapseDG = false;
  }
  
  collapsed2(event: any): void {
    this.ColapseDO = true;
  }

  expanded2(event: any): void {
    // console.log(event);
    this.ColapseDO = false;
  }
  collapsed3(event: any): void {
    this.ColapseDB1 = true;
  }

  expanded3(event: any): void {
    // console.log(event);
    this.ColapseDB1 = false;
  }
  collapsed4(event: any): void {
    this.ColapseDB2 = true;
  }

  expanded4(event: any): void {
    // console.log(event);
    this.ColapseDB2 = false;
  }

  collapsedMain(event: any): void {
  }

  expandedMain(event: any): void {
    // console.log(event);
  }

  ngOnInit(): void {

  }
}
