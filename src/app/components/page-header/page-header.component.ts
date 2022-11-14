import { LoginService } from './../../services/login.service';
import { LoginDialogComponent } from './../login-dialog/login-dialog.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    // this.openLoginDialog1({}, (result) => { console.log(result);});
    // let originalMethod = this.openLoginDialog1;
    // this.openLoginDialog1 = (initianLoginDate:any, loginCallback: (result: any) => void) => {
    //   if(true){
    //     //Ban filter initianLoginDate
    //     return;
    //   }
    //   originalMethod.apply(this, [initianLoginDate, loginCallback]);
    // };
  }

  // openLoginDialog1(initianLoginDate:any, loginCallback: (result: any) => void) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.autoFocus = true;

  //   const dialogRef = this.dialog.open(LoginDialogComponent, {
  //     width: '350px',
  //     height: '270px',
  //     data: initianLoginDate,
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     if (result) {
  //       loginCallback(result);
  //     }
  //   });
  // }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '350px',
      height: '270px',
      disableClose: true,
      autoFocus: true,
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loginService.login(result);
      }
    });
  }

  logout() {
    this.loginService.logout();
  }
}
