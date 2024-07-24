import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { animate } from '@angular/animations';
import { ApiGeneralService } from './services/api-general.service';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
//import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavBarComponent,PaginaPrincipalComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'proyecto_jas';
    usuarioLoguiado:any

    constructor(private _servicioApi: ApiGeneralService){

    }

    ngOnInit():void{
        this.usuarioLoguiado = this._servicioApi.obtenerStatusLogin()
    }
}
