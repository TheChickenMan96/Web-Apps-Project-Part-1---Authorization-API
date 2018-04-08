import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleTextComponent } from './sample-text/sample-text.component';
import { SampleDataComponent } from './sample-data/sample-data.component';

const routes: Routes = [
  { path: 'sampletext', component: SampleTextComponent },
  { path: 'sampledata', component: SampleDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
