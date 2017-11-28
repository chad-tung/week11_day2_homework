var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe('dinosaur tests', function() {
    beforeEach(function() {
        dino1 = new Dinosaur('Triceratops', 2);
        dino2 = new Dinosaur('Tyrannosaurus', 1);
    });
    it('has a type', function() {
        assert.strictEqual(dino1.type, 'Triceratops');
    });
    it('has fertility', function() {
        assert.strictEqual(dino1.fertility, 2);
        assert.strictEqual(dino2.fertility, 1);
    });
    it('can reproduce', function() {
        var dinoOffspring = new Dinosaur('Triceratops', 2);
        assert.deepStrictEqual(dino1.reproduce(), [dinoOffspring, dinoOffspring]);
        assert.deepStrictEqual(dino1.offspring.length, 2);
        assert.deepStrictEqual(dino1.offspring, [dinoOffspring, dinoOffspring]);
        dino1.reproduce();
        assert.deepStrictEqual(dino1.offspring.length, 4);
        assert.deepStrictEqual(dino1.offspring, [dinoOffspring, dinoOffspring, dinoOffspring, dinoOffspring]);
    });
});
