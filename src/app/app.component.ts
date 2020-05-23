import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Password Generator';
  password = '';
  passwordLength = null;
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onButtonClick = () => {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '+%/()=?ç';

    let validCharts = '';

    if (this.useLetters) {
      validCharts += letters;
    }
    if (this.useNumbers) {
      validCharts += numbers;
    }
    if (this.useSymbols) {
      validCharts += symbols;
    }

    let generatedPassword = '';

    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validCharts.length);
      generatedPassword += validCharts[index];
    }
    this.password = generatedPassword;
  };
  onChange = ({ target }) => {
    console.log(target);

    if (target.type === 'checkbox') {
      this[target.id] = !this[target.id];
    } else if (target.type === 'number') {
      if (parseInt(target.value)) {
        this[target.id] = target.value;
      }
    } else {
      this[target.id] = target.value;
    }
  };
}
