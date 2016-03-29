(function() {

  var app = angular.module('pokeDash', []);

  app.directive('typeChecker', function() {
    return {
      restrict: 'E',
      templateUrl: 'type-checker.html',
      controller: function() {
        this.types = pokeTypes;
        this.sel1 = this.types.all.sort()[0];
        this.sel2 = "";

        this.entries = [];
        this.sel1 = this.types.all.sort()[0];
        this.sel2 = "";

        var _self = this;

        this.addWeakness = function() {
          entry = {};
          entry.t1 = _self.sel1;
          entry.t2 = _self.sel2;
          entry.weaknesses = {};
          _self.types.all.sort().forEach(function(elem) {
            var val = _self.types.getDamage(elem, entry.t1);
            if (entry.t2 !== "")
              val *= _self.types.getDamage(elem, entry.t2);

            if (val === 0.5)
              val = "½";
            if (val === 0.25)
              val = "¼";
            entry.weaknesses[elem] = val;
          });
          entry.classes = {};
          _self.types.all.sort().forEach(function(elem) {
            var val = entry.weaknesses[elem];
            var cls = "";
            switch (val) {
              case 0.25:
              case "¼":
                cls = "tc_quarter";
                break;
              case 0.5:
              case "½":
                cls = "tc_half";
                break;
              case 2:
                cls = "tc_double";
                break;
              case 4:
                cls = "tc_quad";
                break;
              case 0:
                cls = "tc_none";
                break;
              default:
                cls = "tc_std";
            }
            entry.classes[elem] = cls;
          });
          this.entries.push(entry);
        };

        this.reset = function() {
          this.entries = [];
          this.sel1 = this.types.all.sort()[0];
          this.sel2 = "";
        };
      },
      controllerAs: "typeChecker"
    };
  });

  app.directive('typeEntry', function() {
    return {
      restrict: 'E',
      templateUrl: 'type-entry.html'
    };
  });

})();