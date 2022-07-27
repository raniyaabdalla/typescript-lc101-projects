import { Payload } from './Payload';
export class Cargo implements Payload{
    massKg: number;
    marerial: string;
    constructor(masskg: number, material: string) {
        this.massKg = masskg;
        this.marerial = material;
    
    }
}