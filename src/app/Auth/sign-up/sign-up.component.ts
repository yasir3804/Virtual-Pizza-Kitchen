
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { HttpClientModule } from '@angular/common/http';
//import { provideHttpClient, withFetch } from '@angular/common/http';




@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,HttpClientModule] ,
  providers: [AuthService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  registrationForm!: FormGroup;

  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.signupForm = this.fb.group
(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, 
Validators.email
]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: this.checkPasswords }
    );
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { notSame: true };
  }

  onSubmit() {
    this.authService.register(this.signupForm.value).subscribe({
      next: (res: any) => {
        console.log('Response:', res);
        // Show success message
        
this.snackBar.open
('Signup successful!', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar'],
        });
        // Reset form if needed
        this.signupForm.reset();
      },
      error: (err: any) => {
        console.error('Error:', err);
        // Show error message
        
this.snackBar.open
('Signup failed. Please try again.', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar'],
        });
      },
    });
  } 
  
}
