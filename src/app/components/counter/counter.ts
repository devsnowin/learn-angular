import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counterValue = signal(0);

  handleIncrement() {
    this.counterValue.update(value => value + 1);
  }

  handleReset() {
    this.counterValue.set(0);
  }

  handleDecrement() {
    this.counterValue.update(value => {
      if (value <= 0)
      {
        return 0;
      }

      return value - 1;
    });    
  }
}
