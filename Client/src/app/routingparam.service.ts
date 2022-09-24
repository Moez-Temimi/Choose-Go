import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthcheckService } from './authcheck.service';
@Injectable()
export class RoutingparamService implements CanActivate{
  constructor(private authservice:AuthcheckService){}
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  return this.authservice.verifying()
}
}
