import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AgreeComponent } from "./agree/agree.component";
import { FormComponent } from "./form/form.component";

const appRoutes: Routes = [
  { path: '', component: FormComponent },
  { path: 'agree', component: AgreeComponent }
  
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}