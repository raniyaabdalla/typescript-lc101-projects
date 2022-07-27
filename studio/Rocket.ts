import { Astronaut } from './Astronaut';
import { Cagro } from './Cargo';
import { Rocket } from './Rocket';


export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronuts: Astronaut[] =[];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    addCargo(cargo: Cagro){
        if (this.canAdd (cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
            return false;
        }
    canAdd(cargo: Cagro) {
        throw new Error('Method not implemented.');
    }
    }
