import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-pagina-principal',
    standalone: true,
    imports: [],
    templateUrl: './pagina-principal.component.html',
    styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

    formPrincipal: FormGroup;

    constructor(
        private fb: FormBuilder,
        private _apiServicio: ApiGeneralService
    ) {
        this.formPrincipal = this.fb.group({
            nombres:['',Validators.required]  ,

            contraseña: ['',Validators.required] ,

            correoElectronico: ['',Validators.required] ,

            fechaNacimiento:  ['',Validators.required] ,
        })

    }
}
