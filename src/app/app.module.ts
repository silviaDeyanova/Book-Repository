import { BookService } from './services/book.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { BookDescriptionComponent } from './components/book-description/book-description.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { BookComponent } from './components/book/book.component';
import { MatIconModule } from '@angular/material/icon';
import { DWToastrModule } from 'dw-web-shared-lib';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageHeaderComponent,
    BookDescriptionComponent,
    LoginDialogComponent,
    EditDialogComponent,
    BookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    DWToastrModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
