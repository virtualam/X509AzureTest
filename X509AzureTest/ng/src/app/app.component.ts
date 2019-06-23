import { Component } from '@angular/core';
import { AppService } from 'src/Services/app-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'X.509 Test';
  numberOfAttempts: number = 0;
  totalAttempts: number = 5;

  constructor(private appService: AppService) {
    this.numberOfAttempts = 0;
  }

  getValues() {
    if (this.numberOfAttempts >= this.totalAttempts) {
      return;
    }

    let sub = this.appService.getValues(this.numberOfAttempts + 1).subscribe(
      (data: any) => {
        console.log(data);        
        this.numberOfAttempts++;
        this.getValues();
      },
      error => {
        console.log(error);
      }
    );
    sub = null;

  }
}
