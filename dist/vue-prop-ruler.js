'use strict';

var _typeOfIs = require('type-of-is');

var _typeOfIs2 = _interopRequireDefault(_typeOfIs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function vuePropRuler(source, options) {
  var _options$schema = options.schema,
      schema = _options$schema === undefined ? {} : _options$schema;


  var dist = {};
  var sourceKeys = Object.keys(source);
  var sourceKeyCheckMap = sourceKeys.reduce(function (checkMap, key) {
    checkMap[key] = true;
    return checkMap;
  }, {});

  var schemaKeys = Object.keys(schema);
  schemaKeys.forEach(function (schemaKey) {
    var schemaValue = schema[schemaKey];
    var type = schemaValue.type,
        _schemaValue$required = schemaValue.required,
        required = _schemaValue$required === undefined ? false : _schemaValue$required;


    var sourceValue = source[schemaKey];
    if (schemaKey in source) {
      if (type && !_typeOfIs2.default.is(schemaValue, type)) {
        throw new Error(schemaKey + '\'s type should be ' + type);
      }
    } else {
      if (required) {
        throw new Error(schemaKey + ' is required');
      }
      if (schemaValue.default) {
        dist[schemaKey] = schemaValue.default();
      }
    }

    if (!dist[schemaKey]) {
      dist[schemaKey] = sourceValue;
    }
  });

  Object.keys(sourceKeyCheckMap).filter(function (key) {
    return sourceKeyCheckMap[key];
  }).forEach(function (key) {
    return dist[key] = source[key];
  });
  return dist;
};