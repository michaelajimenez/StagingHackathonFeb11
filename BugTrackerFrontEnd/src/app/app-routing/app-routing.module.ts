import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ErrorFormComponent } from '../components/error-form/error-form.component';
import { SearchFormComponent } from '../components/search-form/search-form.component';
import { RouterModule} from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch: "full", redirectTo: 'ErrorForm'},
  {path:'ErrorForm', component: ErrorFormComponent},
  {path:'search', component:SearchFormComponent}
];


@NgModule({
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
  // declarations: [],
  
})

export class AppRoutingModule { }
