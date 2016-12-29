import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import Pages from '../pages/pages';
import { DataProvider } from '../providers/data-provider';

@NgModule({
  declarations: [
    MyApp,
    ...Pages
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ...Pages
  ],
  providers: [DataProvider, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
