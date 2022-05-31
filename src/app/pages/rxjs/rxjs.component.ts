import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  intervalSubs: Subscription;

  constructor() {

    /*
    // Nueva forma de manejar las suscripciones
      this.retornaObservable().pipe( // Filtro para transformar la info del observador
        retry(1)
      ).subscribe({
        next : (valor) => console.log('Subs: ', valor),
        error : (error) => console.warn('Error: ', error),
        complete: () => console.info('Completado')
      });
      */

      this.intervalSubs = this.retornaIntervalo().subscribe(
        ( console.log )
      );
  }

  retornaIntervalo(): Observable<number>{
    return interval(100)
    .pipe(
      // Indica la cantidad de veces o cosas que toma
      //take(10),

      // map transforma la info del observable
      map(valor => valor + 1),

      // Filtra la informacion
      filter(valor => (valor % 2 === 0) ? true : false),

    );
  }


  retornaObservable(): Observable<number>{
    let i = -1;

    const obs$ = new Observable<number>( observer => {
      const intervalo = setInterval(() => {

        i++;
        observer.next(i);

        if (i === 4) {
          // Funcion que cancela intervalos
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          observer.error('i llego al valor de 2');
        }
      }, 1000)
    });

    return obs$;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

}
