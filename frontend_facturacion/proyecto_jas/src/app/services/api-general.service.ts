import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiGeneralService {
    seLogueo: any = false

    

    constructor() { }

    obtenerStatusLogin(){
        return this.seLogueo
    }
}
