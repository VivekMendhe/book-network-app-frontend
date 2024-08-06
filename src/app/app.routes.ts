import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ActiveAccountComponent } from './pages/active-account/active-account.component';
import { BooksComponent } from './components/book/books/books.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'activate-account', component:ActiveAccountComponent},
    {path: 'books', component:BooksComponent},
];
