import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor1: number = 0;
  valor2: number = 0;
  valor: number = 0;
  somar (): vooid {
    let total = Number(this.valor1) + Number(this.valor2);
    alert("a soma é: "+total");
    if (total %2 ==0){
      alert ("é par")
    }else {
      alert ("é impar")
    }
  }

}
