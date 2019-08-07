import { Moment } from 'moment';

export interface ICompte {
    id?: number;
    numero?: number;
    date_creation?: Moment;
    solde?: number;
}

export class Compte implements ICompte {
    constructor(public id?: number, public numero?: number, public date_creation?: Moment, public solde?: number) {}
}
