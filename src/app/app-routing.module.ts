import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { RegisterOkComponent } from './register-ok/register-ok.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: GetStartedComponent },
  { path: 'fuJgMw4LwIzedfCTWLX2tDmAcAK', component: RegisterOkComponent },
  { path: 'verify', component: VerifyComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//https://support-pp.cloud/verify?hash=79cd30f5c9c9e50357c8395505305ba178633a51&uid=1ExViitJo685c9EF0hhjeBqHrv5