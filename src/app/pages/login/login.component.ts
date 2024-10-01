import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  logiObj: any =  {

    
  "EmailId": "",
  "Password": ""
  };

  http= inject(HttpClient);

  onLogin(){
    debugger;
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",this.logiObj).subscribe((res:any)=>{
      if(res.result){
        alert("Log in success")

      }
      else{
        alert(res.message)
      }
    })

  }

}
