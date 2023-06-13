import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem('token');

  console.log('A chambear a chambear')

  if( token ){
    return true;
  }else{
    return inject(Router).createUrlTree(["/", "home"]);
  }


};

