import { Item } from '../app/Item';
import { ItemFactory } from '../app/ItemFactory'

export const items: Item[] = [
    ItemFactory.create("+5 Dexterity Vest", 10, 20), 
    ItemFactory.create("Aged Brie", 2, 0), 
    ItemFactory.create("Elixir of the Mongoose", 5, 7), 
    ItemFactory.create("Sulfuras, Hand of Ragnaros", 0, 80), 
    ItemFactory.create("Sulfuras, Hand of Ragnaros", -1, 80),
    ItemFactory.create("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    ItemFactory.create("Backstage passes to a TAFKAL80ETC concert", 10, 30),
    ItemFactory.create("Backstage passes to a TAFKAL80ETC concert", 5, 10)
]

