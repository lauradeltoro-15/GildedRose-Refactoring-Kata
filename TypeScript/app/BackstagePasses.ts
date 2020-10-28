import { Item } from './Item';

export class BackstagePasses extends Item {

    private doubleThreshold = 10;
    private tripleThreshold = 5;
    private resetThreshold = 0;

    constructor(public name: string, public sellIn: number, public quality: number) {
        super();
    }

    update() {
        
        if (this.sellIn < this.resetThreshold) {
            this.resetQuality();
            return
        }
        if (this.sellIn <= this.tripleThreshold) {
            this.increaseItemQuality();
        }
        if (this.sellIn <= this.doubleThreshold) {
            this.increaseItemQuality();
        }
        this.increaseItemQuality();

        this.decreaseSellIn();

    }
}