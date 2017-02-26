export default class MapRuler {
  constructor (options = {}) {
    this.options = options;
    this.ruler = options.ruler || this.defaultRuler;
  }
  defaultRuler (source, options) {
    return source;
  }
  enforce (source, options = {}) {
    if (!source) {
      return null;
    }

    return this.ruler(source, options);
  }
}
