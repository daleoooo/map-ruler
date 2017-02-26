"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapRuler = function () {
  function MapRuler() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MapRuler);

    this.options = options;
    this.ruler = options.ruler || this.defaultRuler;
  }

  _createClass(MapRuler, [{
    key: "defaultRuler",
    value: function defaultRuler(source, options) {
      return source;
    }
  }, {
    key: "enforce",
    value: function enforce(source) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!source) {
        return null;
      }

      return this.ruler(source, options);
    }
  }]);

  return MapRuler;
}();

exports.default = MapRuler;