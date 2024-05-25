import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/']); // Redirige al componente principal después del inicio de sesión exitoso
      },
      error: (err: any) => {
        this.errorMessage = err; // Mostrar el mensaje de error específico
        console.error('Login error', err);
      }
    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
