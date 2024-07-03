import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiGeneralService {
    urlApi:string= 'http://localhost:4200/api/v1';
    seLogueo: any = false



    constructor(private http: HttpClient) { }

    obtenerStatusLogin(){
        return this.seLogueo
    }
}
