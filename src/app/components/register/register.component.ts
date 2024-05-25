import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {
    console.log('RegisterComponent initialized');
  }

  onSubmit() {
    console.log('Register form submitted with email:', this.email);
    this.authService.register(this.username, this.email, this.password).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']); // Redirigir al componente de login
      },
      error: (error) => {
        console.error('Registration error', error);
        this.errorMessage = 'Registration failed';
      }
    });
  }
}
