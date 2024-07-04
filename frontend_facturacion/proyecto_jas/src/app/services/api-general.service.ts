import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiGeneralService {
    urlApi: string = 'http://localhost:4200/api/facturacion';
    seLogueo: any = true

    constructor(private http: HttpClient) { }

    obtenerStatusLogin() {
        return this.seLogueo
    }

    postRegistroUsuario(data:any) {
        return this.http.post(`${this.urlApi}/crear-usuario`, data)
    }

}
