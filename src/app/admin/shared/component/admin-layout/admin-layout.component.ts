import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {

  constructor(
    public auth: AuthService,
    private router: Router,
  ) { }
  showBurgerMenu(event: any): void {
    const filters = document.querySelector('#product-filter');
    const topIcons = document.querySelector('#top-bar_icons');
    if (topIcons?.classList.contains('show_top-icons') && event.target.offsetParent.classList.contains('open-burger')) {
      event.target.offsetParent.classList.remove('open-burger');
      topIcons?.classList.remove('show_top-icons');
    } else {
      event.target.offsetParent.classList.add('open-burger');
      topIcons?.classList.add('show_top-icons');
      if (filters?.classList.contains('showEl')) {
        filters?.classList.remove('showEl');
      }
    }
  }

  exit(): void {
    this.auth.logout();
    this.router.navigate(['/admin', 'login']);
  }

  darkTheme(event: any): void {
    if (document.body.style.cssText.includes('--text-color:#000')) {
      document.body.style.setProperty('--first-color', '#191919');
      document.body.style.setProperty('--second-color', '#272727');
      document.body.style.setProperty('--text-color', '#fff');
      document.body.style.setProperty('--other-text-color', '#999999');
      document.body.style.setProperty('--body-color', '#000');
      document.body.style.setProperty('--button-lightness', '52%');
      event.target.parentNode.parentNode.parentNode.classList.remove('color-invert');
    } else {
      document.body.style.setProperty('--first-color', '#f0f2f5');
      document.body.style.setProperty('--second-color', '#c7c7c7');
      document.body.style.setProperty('--text-color', '#000');
      document.body.style.setProperty('--other-text-color', '#4d4d53');
      document.body.style.setProperty('--body-color', '#fbfbfd');
      document.body.style.setProperty('--button-lightness', '60%');
      event.target.parentNode.parentNode.parentNode.classList.add('color-invert');
    }

  }
  scrollUp(): void {
    window.scroll(0, 0);
  }

}
