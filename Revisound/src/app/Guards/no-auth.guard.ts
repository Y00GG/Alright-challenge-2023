import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noAuthGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem('token');

  console.log('A chambear a chambear')

  if( token ){
    return inject(Router).createUrlTree(["/", "my-documents"]);
  }else{
    return true;
  }

};
