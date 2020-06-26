import { Component } from '@angular/core';
import arrayWords from "../utils/words"
import arrayCountries from "../utils/countries"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator-new';
  number: number ;
  words = '';
  limit = 10;

  handleSlideChange(newLimit : number){
    this.limit=newLimit;
  }
  generateWords(){
    this.words= arrayWords.slice(0, this.limit).join(" ");
  }
  generateCountries(){
    this.words = arrayCountries.slice(0, this.limit).join(" ");
  }
  generateNumber(){
    this.words =Math.floor(Math.random()*this.limit).toString();
  }


}
