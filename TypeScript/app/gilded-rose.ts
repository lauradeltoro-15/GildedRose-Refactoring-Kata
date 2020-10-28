import { Item } from './Item';

export class GildedRose {
    updateQuality(items: Item[]) {
        items.forEach((item: Item) => item.update());
    }
}
