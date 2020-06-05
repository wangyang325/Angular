import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {NavigatorComponent} from './navigator/navigator.component';
import {SearchListService} from './search-list.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchformComponent} from './searchform/searchform.component';
import {DetailsPageComponent} from './details-page/details-page.component';
import {AppRoutingModule} from './app-routing.module';
import {View1Component} from './view1/view1.component';
import {View2Component} from './view2/view2.component';
import {Product1Component} from './product1/product1.component';
import {Product2Component} from './product2/product2.component';
import {Service1} from './service/Service1';
import {LoggerService} from './service/LoggerService';
import {View1Module} from './view1/view1.module';
import {RainbowDirectiveDirective} from './rainbow-directive.directive';
import {StorageServiceModule} from 'ngx-webstorage-service';
import {CallMicroservice} from './service/CallMicroservice';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavigatorComponent,
    SearchformComponent,
    DetailsPageComponent,
    View1Component,
    View2Component,
    Product1Component,
    Product2Component,
    RainbowDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    View1Module,
    ReactiveFormsModule,
    StorageServiceModule,
    HttpClientModule
  ],
  providers: [SearchListService, LoggerService, CallMicroservice,
    // Use class
    {provide: Service1, useClass: Service1},
    // Use Factor
    //           {provide: Service2, useFactory: (logger: LoggerService) => {
    //             const service2 = new Service2();
    //             service2.name = 'Service2 Changed';
    //             return service2;
    //           }, deps: [LoggerService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
