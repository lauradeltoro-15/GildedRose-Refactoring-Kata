import { Item } from './Item';

export class DefaultItem extends Item {

    private defaultItemDoubleDecreaseThreshold = 0;

    constructor(public name: string, public sellIn: number, public quality: number) {
        super();
    }

    update() {

        if (this.sellIn < this.defaultItemDoubleDecreaseThreshold) {
            this.decreaseItemQuality();
        }
        this.decreaseItemQuality();

        this.decreaseSellIn();
    }
}