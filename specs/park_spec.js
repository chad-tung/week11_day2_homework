var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');

describe('park test', function() {
    beforeEach(function() {
        park = new Park();
        dino1 = new Dinosaur("Chaddosaurus-Chad", 4);
        dino2 = new Dinosaur("Triceratops", 2);
        dino3 = new Dinosaur("Tyrannosaurus-Rex", 3);
        park.addDino(dino1);
    });

    it('should have dinosaurs',
    function() {
        assert.strictEqual(park.dinosaurList.length, 1);
        assert.deepStrictEqual(park.dinosaurList, [dino1]);
    });

    it('should be able to add dinosaurs',
    function() {
        park.addDino(dino2);
        assert.strictEqual(park.dinosaurList.length, 2);
        assert.deepStrictEqual(park.dinosaurList, [dino1, dino2]);
    });

    it('should be able to remove dinosaurs by type',
    function() {
        park.addDino(dino2);
        park.addDino(dino2);
        assert.strictEqual(park.dinosaurList.length, 3);
        park.removeDinoByType('Triceratops');
        assert.deepStrictEqual(park.dinosaurList, [dino1]);
    });

    it('should be able to find all dinosaurs with an offspring count of more than 2', function() {
        park.addDino(dino2);
        park.addDino(dino3);
        for (dino of park.dinosaurList) {
            dino.reproduce();
        }
        assert.deepStrictEqual(park.dinosWithLotsOfOffspring(), [dino1, dino3]);
    });

    it('should increase in dino number after one year',
    function() {
        var babyDino = new Dinosaur("Chaddosaurus-Chad", 4);
        park.passYear();
        assert.strictEqual(park.dinosaurList.length, 5);
        assert.deepStrictEqual(park.dinosaurList, [dino1, babyDino, babyDino, babyDino, babyDino]);
    });

    it('should increase in dino number after two years',
    function() {
        park.passYear();
        park.passYear();
        assert.strictEqual(park.dinosaurList.length, 25);
    });

    it('should increase in dino number after one year for 2 dinos', function() {
        park.addDino(dino2);
        park.passYear();
        assert.strictEqual(park.dinosaurList.length, 8);
    });

    it('should be able to calculate growth with 1 dinosaur', function() {
        assert.strictEqual(park.calculateGrowth(1), 5);
        assert.strictEqual(park.calculateGrowth(2), 25);
        assert.strictEqual(park.calculateGrowth(5), 3125);
    });

    it('should be able to calculate growth with 2 dinosaurs', function() {
        park.addDino(dino2);
        assert.strictEqual(park.calculateGrowth(1), 8);
        assert.strictEqual(park.calculateGrowth(2), 34);
    });

    it('should be able to efficiently calculate growth', function() {
        assert.strictEqual(park.efficientEstimate(5), 3125);
        park.addDino(dino2);
        assert.strictEqual(park.efficientEstimate(3), 152);
    })
});
