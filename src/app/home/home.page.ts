import { Component } from '@angular/core';
import { LoginService } from './Login service/login.service';
// import { NavController } from 'ionic-angular';
import { AlertController , NavController } from '@ionic/angular';
import { PatientPage } from '../patient/patient.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username : string;
  password : string;
  constructor(
    private loginService : LoginService,
    public alertController : AlertController,
    public navCtrl : NavController,
    private router : Router
    ) {}

    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Error input',
        message: 'You have entered incorrect username or password.',
        buttons: ['OK']
      });
  
      await alert.present();
    }
  Login(){
    if(this.loginService.getAccount(this.username,this.password)){
    console.log("true");
    this.navCtrl.navigateRoot('/patient');
    return true;
    }
    console.log("false");
    this.presentAlert();
    return false;
  }
  SignUp(){
    this.router.navigate(['sign-up'])
  }


}
