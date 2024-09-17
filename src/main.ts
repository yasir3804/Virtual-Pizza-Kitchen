import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { SignUpComponent } from './app/Auth/sign-up/sign-up.component';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
