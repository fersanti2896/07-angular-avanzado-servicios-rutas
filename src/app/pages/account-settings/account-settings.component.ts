import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  public linkTheme  = document.querySelector('#theme');
  public checkTheme!: NodeListOf<Element>;
  
  constructor() { }

  ngOnInit(): void {
    this.checkTheme = document.querySelectorAll('.selector')
    this.checkCurrentTheme();
  }

  changeTheme( theme: string ) { 
    const url = `./assets/css/colors/${ theme }.css`

    this.linkTheme!.setAttribute('href', url);

    /* Guardamos los cambios que hace el usuario del color en el localStorage */
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void {
    this.checkTheme.forEach( element => {
      element.classList.remove('working');

      const btnTheme     = element.getAttribute('data-theme');
      const btnThemeUrl  = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.linkTheme!.getAttribute('href');

      if( btnThemeUrl === currentTheme ) {
        element.classList.add('working');
      }
    });
  }
}
