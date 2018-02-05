import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>Hey!</h1>
    <p>{{ myObject.location }}</p>
  </div>

  <div>
    <ul>
      <li *ngFor="let arr of myArr">{{arr}}</li>
      <li *ngIf="myArr">Yeah, I exist.</li>
      <li *ngIf="blob == 'something'; else otherTmple">Teehee.</li>

    </ul>
  </div>

  <!--
  <div> hi </div>
  <div #ngIf="blab==false; then tmpl1 else tmpl2"></div>
  -->

  <ng-template #tmpl1>True</ng-template>
  <ng-template #tmpl2>False</ng-template>
  <ng-template #otherTmple>No, I do.</ng-template>


  <div [hidden]="hiddenStatus">
    <!-- LEARNING PROPERTY BINDING -->
    <img src="{{ angularLogo}}"> <!-- this must be string -->
    <img [src]="angularLogo">
    <img bind-src="angularLogo">
  </div>

  <br><br>

  <button [disabled]="buttonStatus" (click)="method()">My Button</button>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  angularLogo = 'https://angular.io/resources/images/logos/angular2/angular.png';
  buttonStatus = false;
  hiddenStatus = true;


  title = 'app';

  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  }

  myArr = ['him','hers','yours'];
  blob = 'notsomething';

  blab = true;

  method(){
    if(this.hiddenStatus == true){
      this.hiddenStatus = false;
    }
    else{
      this.hiddenStatus = true;
    }
  }

}
