export class Evento {
    id: number;
    nombre: string;
    descripcion: string;
    capacidad: number;
    fec_apertura: string;
    fec_termino: string;
    id_curso: number;
    id_instructor: number;
    id_sede: number;
    status: number;
    constructor(){
        this.id=0;
        this.nombre='';
        this.descripcion='';
        this.fec_apertura='';
        this.fec_termino='';
        this.id_curso=0;
        this.id_instructor=0;
        this.id_sede=0;
        this.status=1;
    }  
}
