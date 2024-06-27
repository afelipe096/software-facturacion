import { Routes } from '@angular/router';
import { InicioComponent } from './components/admin/inicio/inicio.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AgregarProductoComponent } from './components/admin/agregar-producto/agregar-producto.component';
import { EstadisticasComponent } from './components/admin/estadisticas/estadisticas.component';
import { ContactoComponent } from './components/contacto/contacto.component';



export const routes: Routes = [
{path:"", component:InicioComponent },
{path: "", component:NavBarComponent},
{path: "", component:AgregarProductoComponent},
{path:  "", component:EstadisticasComponent},
{ path:  "", component: ContactoComponent }


];
