import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  userTests: any[] = [
    { email: 'test@omni.pro', password: '123456' }
  ]

  viewMode: string = 'tab1';
  hideTab: boolean = false;

  open:boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  openMenu(sidenav: any, menu: any){

    this.open = !this.open;

    if(this.open){
      menu.setAttribute('src', '../../assets/images/back.svg');
      sidenav.setAttribute('style', 'width: 100%');
    }else{
      menu.setAttribute('src', '../../assets/images/menu.svg');
      sidenav.setAttribute('style', 'width: 0');

    }
  }

  login(form: NgForm){

    if(!form.valid){
        return;
    }

   let verifica = this.userTests.find(elem => elem.email == form.value.email && elem.password == form.value.password);


    if(verifica){
      this.hideTab = true;

    }else{
      alert("Email y/o contraseña incorrectas");
    }


  }

  register(form: NgForm){
    if(!form.valid){
      return;
    }

    this.userTests.push(form.value);
    this.hideTab = true;


  }

}
