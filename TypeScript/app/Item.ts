export abstract class Item {

    private maxQuality = 50;
    private minQuality = 0;

    abstract name: string;
    abstract sellIn: number;
    abstract quality: number;

    abstract update(): void;

    decreaseSellIn() {
        this.sellIn--;
    }

    resetQuality(): void {
        this.quality = 0;
    }

    increaseItemQuality(): void {
        this.maxQuality > this.quality && this.quality++
    }

    decreaseItemQuality(): void {
        this.minQuality < this.quality && this.quality--
    }
}
