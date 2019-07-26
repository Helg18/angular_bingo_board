import { Component } from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    this.generate();
  }

  boardArray: Array<any> = [];
  b: Array<number> = [];
  i: Array<number> = [];
  n: Array<number> = [];
  g: Array<number> = [];
  o: Array<number> = [];

  generate() {
    this.boardArray = [];
    this.b = [];
    this.i = [];
    this.n = [];
    this.g = [];
    this.o = [];

    let b1 = 0;
    let i1 = 0;
    let n1 = 0;
    let g1 = 0;
    let o1 = 0;
    const nu = [];

    while (nu.length < 25) {
      const n = Math.floor(Math.random() * 75) + 1;
      const validate = nu.filter(x => {
        return n === x;
      });
      if (validate.length === 1) {
        continue;
      }
      if (n <= 15) {
        if (b1 === 5) {
          continue;
        }
        b1++;
      } else if (n > 15 && n <= 30) {
        if (i1 === 5) {
          continue;
        }
        i1++;
      } else if (n > 30 && n <= 45) {
        if (n1 === 5) {
          continue;
        }
        n1++;
      } else if (n > 45 && n <= 60) {
        if (g1 === 5) {
          continue;
        }
        g1++;
      } else if (n > 60 && n <= 75) {
        if (o1 === 5) {
          continue;
        }
        o1++;
      }
      nu.push(n);
  }

    nu.map(x => {
      if (x <= 15) {
        this.b.push(x);
      } else if (x > 15 && x <= 30) {
        this.i.push(x);
      } else if (x > 30 && x <= 45) {
        this.n.push(x);
      } else if (x > 45 && x <= 60) {
        this.g.push(x);
      } else if (x > 60 && x <= 75) {
        this.o.push(x);
      }
    });

    this.boardArray.push(this.b);
    this.boardArray.push(this.i);
    this.boardArray.push(this.n);
    this.boardArray.push(this.g);
    this.boardArray.push(this.o);

    this.transpose(this.boardArray);
    console.log(this.boardArray);
  }

  transpose(a) {
    const w = a.length || 0;
    const h = a[0] instanceof Array ? a[0].length : 0;
    if (h === 0 || w === 0) { return []; }
    // tslint:disable-next-line:prefer-const one-variable-per-declaration
    let i, j, t = [];
    for ( i = 0; i < h; i++) {
      t[i] = [];
      for (j = 0; j < w; j++) {
        t[i][j] = a[j][i];
      }
    }

    return t;
  }
}
