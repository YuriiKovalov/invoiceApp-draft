import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputPageComponent } from './input-page/input-page.component';
import { InvoicePageComponent } from './invoice-page/invoice-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/input', pathMatch: 'full' },
  { path: 'input', component: InputPageComponent },
  { path: 'invoice', component: InvoicePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
