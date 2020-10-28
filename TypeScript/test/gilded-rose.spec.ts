import { GildedRose } from '../app/gilded-rose';
import { items } from './golden-master-text-test';


describe('Gilded Rose', function () {

    it('should foo', function () {
        const gildedRose = new GildedRose();
        var days: number = 4;
        for (let i = 0; i < days; i++) {
            console.log("-------- day " + i + " --------");
            console.log("name, sellIn, quality");
            items.forEach(element => {
                console.log(element.name + ' ' + element.sellIn + ' ' + element.quality);
            });
            console.log();
            gildedRose.updateQuality(items);
        }
    });

});
