// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Alert Component
import { AlertModule } from 'ngx-bootstrap/alert';

// Tabs Module
import { TabsModule } from 'ngx-bootstrap/tabs';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { MensajesComponent } from './mensajes.component';
import { MensajesRoutingModule } from './mensajes-rounting.module';

@NgModule({
  imports: [
    CommonModule,
    MensajesRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    CollapseModule
  ],
  declarations: [ MensajesComponent
  ]
})
export class MensajesModule { }
