import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent  implements OnInit{
  screenWidth = window.innerWidth;
  fullName = "";

  navLinks = [
    { path: '/my-documents', icon: 'fa-solid fa-file', label: 'Mis documentos' },
    { path: '/my-reviews', icon: 'fa-solid fa-eye', label: 'Mis revisiones' },
    { path: '/logs', icon: 'fa-solid fa-users-line', label: 'Historial' },
    { path: '/create-reviewer', icon: 'fa-solid fa-users-line', label: 'Crear Reviewer' },
    // Agrega más aquí...
  ];

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }
  constructor( private apiService: ApiService, private router: Router) {

    try {
      this.fullName = this.apiService.getUser()?.nombre+ " " + this.apiService.getUser()?.apellido
    } catch (error) {
      this.fullName =  ""
    }
  }

  ngOnInit(): void {

  }

  logout(){
    this.apiService.logout();
    this.router.navigate(['/']);
  }

}
