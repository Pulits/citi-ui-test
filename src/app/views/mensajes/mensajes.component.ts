import { Component, OnInit, Renderer2 } from '@angular/core';
import { MensajesService } from './mensajes.service';
import { cda } from './cda';
import { cdaRequest } from './cdaRequest';

@Component({
  templateUrl: 'mensajes.component.html'
})

export class MensajesComponent implements OnInit {

  ColapseDG: any;
  ColapseDO: any;
  ColapseDB1: any;
  ColapseDB2: any;
  isCollapsed1: boolean = true;
  isCollapsed2: boolean = true;
  isCollapsed3: boolean = true;
  isCollapsed4: boolean = true;
  amountSwitch: boolean = false;

  isCollapsedMain: boolean = false;

  cda: cda[] = [];
  headers: any;
  trackingKey: any;

  cdaScreen: any = {
    paymentType: '',
    cuentaBeneficiario: '',
    orderingName: '',
    rfcOrCurpPayer: ''
  }


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

  changeSwitchAmount(): void {
    this.amountSwitch = !this.amountSwitch;
  }

  /*   getCDA() {
      this.menServ.getCDA().subscribe(data => {
          for (const d of (data as any)) {
            this.cda.push({
              paymentType: d.customerHubModel.paymentType,
              cuentaBeneficiario: d.customerHubModel.cuentaBeneficiario,
              rfcOrCurpPayer: d.customerHubModel.rfcOrCurpPayer,
              orderingName: d.customerHubModel.orderingName
            });
  
            this.cdaScreen.paymentType = d.customerHubModel.paymentType;
            this.cdaScreen.cuentaBeneficiario =  d.customerHubModel.cuentaBeneficiario;
            this.cdaScreen.rfcOrCurpPayer = d.customerHubModel.rfcOrCurpPayer;
            this.cdaScreen.orderingName = d.customerHubModel.orderingName;
          }
          console.log(this.cda);
          console.log(data);
  
        });
    } */

  getCDA() {
    this.menServ.getCDA().subscribe(resp => {
      console.log(resp);
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);

      for (const data of resp.body) {
        this.cda.push(data);

        this.cdaScreen.ordererAccountType = data.ordererAccountType;
        this.cdaScreen.orderingAccount = data.orderingAccount;
        this.cdaScreen.rfcOrCurpPayer = data.rfcOrCurpPayer;
        this.cdaScreen.orderingName = data.orderingName;

        this.cdaScreen.ordererAccountType = data.ordererAccountType;
        this.cdaScreen.orderingAccount = data.orderingAccount;
        this.cdaScreen.rfcOrCurpPayer = data.rfcOrCurpPayer;
        this.cdaScreen.orderingName = data.orderingName;

        this.cdaScreen.ordererAccountType = data.ordererAccountType;
        this.cdaScreen.cuentaBeneficiario = data.cuentaBeneficiario;
        this.cdaScreen.rFCOCurpBeneficiario = data.rFCOCurpBeneficiario;
        this.cdaScreen.nombreBeneficiario = data.nombreBeneficiario;

        this.cdaScreen.ordererAccountType = data.ordererAccountType;
        this.cdaScreen.cuentaBeneficiario2 = data.cuentaBeneficiario2;
        this.cdaScreen.rFCOCurpBeneficiario2 = data.rFCOCurpBeneficiario2;
        this.cdaScreen.nombreBeneficiario2 = data.nombreBeneficiario2;

        this.cdaScreen.selloDigital = data.selloDigital;
        this.cdaScreen.selloDigital = data.selloDigital;
        this.cdaScreen.selloDigital = data.selloDigital;
      }
      console.log(this.cda);
      console.log(this.headers);
    });
  }

  getCDAById(id: any) {
    this.menServ.getCDAById(id)
      .subscribe(data => {
        console.log(data);
      });
  }

  searchCDA(request: cdaRequest) {
    this.menServ.searchCDA(request)
      .subscribe(data => {
        console.log(data);
        /* this.cdaScreen.paymentType = data.paymentType;
        this.cdaScreen.cuentaBeneficiario = data.cuentaBeneficiario;
        this.cdaScreen.rfcOrCurpPayer = data.rfcOrCurpPayer;
        this.cdaScreen.orderingName = data.orderingName; */

        this.cdaScreen.ordererAccountType = data.ordererAccountType;
        this.cdaScreen.orderingAccount = data.orderingAccount;
        this.cdaScreen.rfcOrCurpPayer = data.rfcOrCurpPayer;
        this.cdaScreen.orderingName = data.orderingName;

        this.cdaScreen.ordererAccountType = data.ordererAccountType;
        this.cdaScreen.orderingAccount = data.orderingAccount;
        this.cdaScreen.rfcOrCurpPayer = data.rfcOrCurpPayer;
        this.cdaScreen.orderingName = data.orderingName;

        this.cdaScreen.ordererAccountType = data.ordererAccountType;
        this.cdaScreen.cuentaBeneficiario = data.cuentaBeneficiario;
        this.cdaScreen.rFCOCurpBeneficiario = data.rFCOCurpBeneficiario;
        this.cdaScreen.nombreBeneficiario = data.nombreBeneficiario;

        this.cdaScreen.ordererAccountType = data.ordererAccountType;
        this.cdaScreen.cuentaBeneficiario2 = data.cuentaBeneficiario2;
        this.cdaScreen.rFCOCurpBeneficiario2 = data.rFCOCurpBeneficiario2;
        this.cdaScreen.nombreBeneficiario2 = data.nombreBeneficiario2;

        this.cdaScreen.selloDigital = data.selloDigital;
        this.cdaScreen.selloDigital = data.selloDigital;
        this.cdaScreen.selloDigital = data.selloDigital;

        
      });
  }

  searchCDABtn(){
    let request = {} as cdaRequest;
    request.claveRastreo = this.trackingKey;
    console.log(this.trackingKey);
    this.searchCDA(request);
    //request.rfcCurp = "AYSA871101YH1";

  }



  constructor(private menServ: MensajesService) { }

  ngOnInit(): void {
    let request = {} as cdaRequest;
    request.claveRastreo = "93";
    request.rfcCurp = "AYSA871101YH1";

    //this.getCDA();
    this.searchCDA(request);
  }
}
