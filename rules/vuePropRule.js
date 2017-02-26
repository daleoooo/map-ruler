import Type from 'type-of-is';

module.exports = function vuePropRule (key, schemaValue, srcValue) {
    if (typeof schemaValue !== 'object') {
        throw new Error(`schema is not an object`);
    }

    if (schemaValue.type && typeof srcValue !== schemaValue.type) {
        throw new Error(`${key} is not a ${typeof schemaValue.type}`);
    }

    if ()

        if (key === '') {
            key     
        }
}
