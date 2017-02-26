import Type from 'type-of-is';

module.exports = function vuePropRuler (source, options) {

  const {
    schema = {}
  } = options;

  const dist = {}
  const sourceKeys = Object.keys(source);
  const sourceKeyCheckMap = sourceKeys.reduce((checkMap, key) => {
    checkMap[key] = true;
    return checkMap;
  }, {});

  const schemaKeys = Object.keys(schema);
  schemaKeys.forEach(schemaKey => {
    const schemaValue = schema[schemaKey];
    const {
      type, required = false
    } = schemaValue;

    const sourceValue = source[schemaKey];
    if (schemaKey in source) {
      if (type && !Type.is(schemaValue, type)) {
        throw new Error(`${schemaKey}'s type should be ${type}`);
      }
    } else {
      if (required) {
        throw new Error(`${schemaKey} is required`);
      }
      if (schemaValue.default) {
        dist[schemaKey] = schemaValue.default();
      }
    }

    if (!dist[schemaKey]) {
      dist[schemaKey] = sourceValue;
    }
  })

  Object.keys(sourceKeyCheckMap).filter(key => sourceKeyCheckMap[key]).forEach(key => dist[key] = source[key]);
  return dist;
}
