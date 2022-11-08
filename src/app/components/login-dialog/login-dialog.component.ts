import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
})
export class LoginDialogComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<LoginDialogComponent>
  ) {}

  form = this.formBuilder.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  submit() {
    if (
      this.form.valid &&
      !this.form.controls.username.pristine &&
      !this.form.controls.password.pristine
    ) {
      this.dialogRef.close(this.form.value);
    }
  }

  @HostListener('window:keyup.Enter', ['$event'])
  onEnterPressed(event: KeyboardEvent): void {
    this.submit();
  }
}
