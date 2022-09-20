import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo:string = '';
  public tituloSubs$: Subscription;

  constructor(
    private router : Router
  ) {
    this.tituloSubs$ = this.getArmentosRuta()
    .subscribe(
      ({titulo}) => {
        this.titulo = titulo;

        // Se cambia el nombre de la pestaña del navegador
        document.title = `AdminPro - ${titulo}`;
      }
    );
  }

  getArmentosRuta(){
    /* Obtener datos de la ruta en la que estoy */
    return this.router.events
    .pipe(
      filter( (event:any) => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data )
      )
  }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

}
