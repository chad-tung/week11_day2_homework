var Dinosaur = function(type, fertility) {
    this.type = type;
    this.offspring = [];
    this.fertility = fertility;
}

Dinosaur.prototype = {
    reproduce: function() {
        var newOffspring = [];
        var offspring = new Dinosaur(this.type, this.fertility);
        for (var i = 0; this.fertility > i; i++) {
            this.offspring.push(offspring);
            newOffspring.push(offspring);
        };
        return newOffspring;
    }
};

module.exports = Dinosaur;
