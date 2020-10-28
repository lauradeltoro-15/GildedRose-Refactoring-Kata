import { Item } from './Item';

export class AgedBrie extends Item {
    
    private agedBrieDoubleThreshold = 0;
    
    constructor(public name: string, public sellIn: number, public quality: number) { 
        super();
    }

    update() {
    
        if (this.sellIn <= this.agedBrieDoubleThreshold) {
            this.increaseItemQuality();
        }
        this.increaseItemQuality();

        this.decreaseSellIn();

    }
}