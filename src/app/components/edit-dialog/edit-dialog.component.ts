import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditDialogComponent>
  ) {}

  ngOnInit(): void {}

  form = this.formBuilder.group({
    title: [this.data.title],
    author: [this.data.author],
    resume: [this.data.resume],
  });

  close() {
    this.dialogRef.close();
  }

  submit() {
    if (
      this.form.valid &&
      (!this.form.controls.title.pristine ||
        !this.form.controls.author.pristine ||
        !this.form.controls.resume.pristine)
    ) {
      this.dialogRef.close(this.form.value);
    }
  }

  @HostListener('window:keyup.Enter', ['$event'])
  onEnterPressed(event: KeyboardEvent): void {
    this.submit();
  }
}
