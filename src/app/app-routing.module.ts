import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptotableComponent } from './cryptotable/cryptotable.component';
import { CryptodetailComponent } from './cryptodetail/cryptodetail.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  { path: 'statistics', component: CryptotableComponent },
  {
    path: 'cryptodetail/:id',
    component: CryptodetailComponent,
  },
  { path: 'news', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
