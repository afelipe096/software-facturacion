import { Routes } from '@angular/router';
import { AgregarProductoComponent } from './components/admin/agregar-producto/agregar-producto.component';
import { EstadisticasComponent } from './components/admin/estadisticas/estadisticas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/admin/inicio/inicio.component';
import { InventarioComponent } from './components/admin/inventario/inventario.component';




export const routes: Routes = [
    { path: "inicio", component: InicioComponent },
    { path: "crear-producto", component: AgregarProductoComponent },
    { path: "estadisticas", component: EstadisticasComponent },
    { path: "contacto", component: ContactoComponent },
    { path: "inventario", component: InventarioComponent}
];
