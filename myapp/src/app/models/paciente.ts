export interface Paciente {
    /**
     * "id": 4,
        "nombre": "Antonio",
        "edad": 30,
        "creadoEn": "2023-06-13T20:06:12.833702",
        "email": "antonio@poquitoporfavor.es",
        "apellido": "Lopez",
        "fotoHashCode": null
     */
    id:number;
    nombre:string;
    email:string;
    apellido:string;
    edad:number;
    creadoEn: string;
    fotoHashCode:number;

}
