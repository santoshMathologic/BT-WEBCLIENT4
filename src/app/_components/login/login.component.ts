import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  enable: boolean = false;
  username: string = 'root';
  password: string = 'root123'
  role: string = 'admin'
  token: string;
  constructor(private router: Router, private route: ActivatedRoute,
  ) {
    this.token = "CpzUMHyMPPtmp8gW8EhTxlzuQA3o8ahx";
  }

  ngOnInit() {
  }

  login() {

    setTimeout(() => {
      localStorage.setItem("userInfo", JSON.stringify({ 'username': this.username, role: this.role, token: this.token }));
      this.router.navigate(['/dashboard/home']);
    }, 1000);


  }
}
