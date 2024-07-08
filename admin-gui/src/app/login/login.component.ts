import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;
  invalidCredentials: boolean = false;

  constructor(private router: Router) { }

  onSubmit() {
    if (this.email === 'admin@example.com' && this.password === 'password') {
      localStorage.setItem('token', 'authenticated');
      this.router.navigate(['/dashboard']);
    } else {
      this.invalidCredentials = true;
    }
  }
}
