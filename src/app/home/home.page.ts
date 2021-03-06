import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  acessarPagina(){
    this.router.navigate(['/outra']);
  }
  numeroAleatorio(){
    console.log(Math.floor(Math.random() * 10));
  }

}
