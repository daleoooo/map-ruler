import test from 'ava';
import MapRuler from '../index.js';

test('Create a rule MapRuler', t => {
  const mapRuler = new MapRuler();
  t.true(mapRuler instanceof MapRuler);
});

test('MapRuler use default ruler', t => {
  const mapRuler = new MapRuler();
  t.true(mapRuler.ruler === mapRuler.defaultRuler);
});

test('MapRuler use custom ruler', t => {
  const ruler = function (source, options) {
    return source;
  }
  const mapRuler = new MapRuler({ ruler });
  t.true(mapRuler.ruler === ruler);
});

test('MapRuler enforce a ruler', t => {
  const ruler = function (source, options) {
    return source;
  }

  const mapRuler = new MapRuler({ ruler });
  const source = { a: 1 }

  t.deepEqual(mapRuler.enforce(source), source);
});

test('MapRuler enforce a ruler with option', t => {
  const options = { 
    foo: 1,
    bar: 2
  }

  const ruler = function (source, opts) {
    t.deepEqual(opts, options)
    return source;
  }

  const mapRuler = new MapRuler({ ruler });
  const source = { a: 1 }

  t.deepEqual(mapRuler.enforce(source, options), source);
});
