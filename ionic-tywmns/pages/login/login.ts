import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { FormGroup,FormControl} from '@angular/forms';
import { SignUpPage } from '../signup/signup';
import { ResetPage } from '../reset/reset';
import { BiologyPage } from '../biology/biology';
import { PhysicsPage } from '../physics/physics';
import { ChemistryPage } from '../chemistry/chemistry';
import { MathematicsPage } from '../math/math';
import { QuestionsPage } from '../questions/questions';
import { NotFoundPage } from '../notfound/notfound';
import {AutoService } from '../../providers/auto.service';

@Component({
  selector: 'page-home',
  templateUrl: 'login.html',
  styleUrls: [ 'login.scss' ] 
})
export class LogInPage {

  logins = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  err: any; 
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public auto: AutoService) {
      this.err = this.auto.err;
  }

  login(){
    let email: string = this.logins.value["email"];
    let password: string = this.logins.value["password"];

    this.auto.signIn(email, password);
  }

  logOut() {
    this.auto.logOut();
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 2000
    });
    loader.present();
  }

  pushSignUpPage(){
    this.navCtrl.push(SignUpPage);
  }

  pushResetPage(){
    this.navCtrl.push(ResetPage);
  }

  pushQuestionsPage(){
    this.navCtrl.push(QuestionsPage);
  }

  pushMathematicsPage(){
    this.navCtrl.push(MathematicsPage);
  }

  pushPhysicsPage(){
    this.navCtrl.push(PhysicsPage);
  }

  pushChemistryPage(){
    this.navCtrl.push(ChemistryPage);
  }

  pushBiologyPage(){
    this.navCtrl.push(BiologyPage);
  }

  pushNotFoundPage(){
    this.navCtrl.push(NotFoundPage);
  }

  SignUpAndLoading(){
    this.presentLoading();
    this.pushSignUpPage();
  }

  ResetAndLoading(){
    this.presentLoading();
    this.pushResetPage();
  }

  logOutAndLoading(){
    this.presentLoading();
    this.logOut();
  }

  QuestionsAndLoading(){
    this.presentLoading();
    this.pushQuestionsPage();
  }

  MathAndLoading(){
    this.presentLoading();
    this.pushMathematicsPage();
  }

  PhyAndLoading(){
    this.presentLoading();
    this.pushPhysicsPage();
  }

  ChemAndLoading(){
    this.presentLoading();
    this.pushChemistryPage();
  }

  BioAndLoading(){
    this.presentLoading();
    this.pushBiologyPage();
  }

  NotAndLoading(){
    this.presentLoading();
    this.pushNotFoundPage();
  }

}