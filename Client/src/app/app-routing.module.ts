import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { RegisterComponent } from './register/register.component';
import { RoutingparamService } from './routingparam.service';
import { SharepostComponent } from './sharepost/sharepost.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"about",component: AboutComponent,canActivate:[RoutingparamService]},
  {path:"profil",component: ProfilComponent},
  {path:"share",component: SharepostComponent},

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
