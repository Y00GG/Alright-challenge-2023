import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formulario: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private apiService: ApiService) {

    this.formulario = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required]],
    });

  }


  login(): void {

    if (this.formulario.valid) {
      console.log(this.formulario.value);
      this.apiService.login(this.formulario.value).subscribe(({usuario, token}) => {
        localStorage.setItem('token', token)
        localStorage.setItem('usuario', JSON.stringify(usuario))
        this.router.navigate(['/my-documents']);
      });
    } else {
      Object.keys(this.formulario.controls).forEach((key) => {
        this.formulario.get(key)?.markAsTouched();
      });
    }



  }
}
