import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiGeneralService {
    seLogueo: any = true

    constructor() { }

    obtenerStatusLogin(){
        return this.seLogueo
    }
}
