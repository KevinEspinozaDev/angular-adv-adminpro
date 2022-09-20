import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public linkTheme = document.querySelector('#theme');

  constructor() {

    let url:any = localStorage.getItem('theme') ? localStorage.getItem('theme') : `./assets/css/colors/default-dark.css`;
    console.log(url)
    /* Cambio de atributo a un HTML */
    this.linkTheme?.setAttribute('href', url);

    localStorage.setItem('theme', url);

  }

  changeTheme(theme: string) {
    const url:string = `./assets/css/colors/${theme}.css`;

    /* Cambio de atributo a un HTML */
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme():void{
    const links = document.querySelectorAll('.selector');


    links.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;

      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        element.classList.add('working');
      }
    })
  }

}
