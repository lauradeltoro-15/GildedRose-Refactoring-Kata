import { Item } from './Item';
import { Sulfuras } from './Sulfuras';
import { AgedBrie } from './AgedBrie';
import { BackstagePasses } from './BackstagePasses'
import { DefaultItem } from './DefaultItem';

export class ItemFactory {

    static create = (name: string, sellIn: number, quality: number): Item => {
   
        const agedBrieName = 'Aged Brie'; 
        const backstagePassesName = 'Backstage passes to a TAFKAL80ETC concert';
        const sulfurasName = 'Sulfuras, Hand of Ragnaros';

        if (name === agedBrieName) return new AgedBrie(name, sellIn, quality);
        if (name === backstagePassesName) return new BackstagePasses(name, sellIn, quality);
        if (name === sulfurasName) return new Sulfuras(name, sellIn, quality);

        return new DefaultItem(name, sellIn, quality);
    }
}