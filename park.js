var Park = function() {
    this.dinosaurList = [];
}

Park.prototype = {
    
    addDino: function(dino) {
        this.dinosaurList.push(dino);
    },

    removeDinoByType: function(type) {
        var newArray = [];
        for (dino of this.dinosaurList) {
            if (dino.type !== type) {
                newArray.push(dino);
            }
        }
        this.dinosaurList = newArray;
    },

    dinosWithLotsOfOffspring: function() {
        var fertileArray = [];
        for (dino of this.dinosaurList) {
            if (dino.offspring.length > 2) {
                fertileArray.push(dino);
            }
        }
        return fertileArray;
    },

    passYear: function() {
        var newDinos = [];
        for (var dino of this.dinosaurList) {
            for (var dinoBaby of dino.reproduce()) {
                newDinos.push(dinoBaby);
            }
        }
        for (var dino of newDinos) {
            this.dinosaurList.push(dino);
        }
    },

    replicaDinoList: function() {
        var replicaList = [];
        for (var dino of this.dinosaurList) {
            replicaList.push(dino);
        }
        return replicaList;
    },

    calculateGrowth: function(years) {
        var oldDinos = this.replicaDinoList();
        for (var i=0; i < years; i++) {
            var newDinos = [];
            for (var dino of oldDinos) {
                for (var dinoBaby of dino.reproduce()) {
                    newDinos.push(dinoBaby);
                }
            }
            for (var dino of newDinos) {
                oldDinos.push(dino);
            }
        }
        return oldDinos.length;
    }

}

module.exports = Park;
