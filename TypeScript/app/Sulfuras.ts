import { Item } from './Item';

export class Sulfuras extends Item {

    constructor(public name: string, public sellIn: number, public quality: number) {
        super();
    }

    update() { }
}