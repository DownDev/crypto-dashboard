import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { CryptotableComponent } from './cryptotable/cryptotable.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { CryptodetailComponent } from './cryptodetail/cryptodetail.component';
import { ZingchartAngularModule } from 'zingchart-angular';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    CryptotableComponent,
    CryptodetailComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ZingchartAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
