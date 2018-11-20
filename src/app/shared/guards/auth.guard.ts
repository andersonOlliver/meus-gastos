import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //Aqui vai a lógica
    console.log("VERIFICANDO");
    console.log(localStorage['token']);

    if (localStorage['token'] == undefined) {
      this.router.navigate(['/login']);
    }

    if (localStorage['token'] != 'null') {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
