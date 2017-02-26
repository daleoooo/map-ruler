import test from 'ava';

import MapRuler from '../index.js';
import ruler from '../rules/vue-prop-ruler.js'

const mapRuler = new MapRuler({ ruler });

test('schema | type = String', t => {
  const source = {
    foo: 1,
    bar: 2
  }
  const schema = {
    foo: {
      type: String
    }
  }
  t.throws(() => {
    mapRuler.enforce(source, {
      schema 
    });
  })
});

test('schema | type = String', t => {
  const source = {
    foo: '1',
    bar: '2'
  }
  const schema = {
    foo: {
      type: String
    }
  }

  const dist = mapRuler.enforce(source);
  t.deepEqual(source, dist);
});

test('schema | type = String, isRequired = true', t => {
  const source = {
    bar: '2'
  }
  const schema = {
    foo: {
      type: String,
      required: true,
    }
  }

  t.throws(() => {
    mapRuler.enforce(source, {
      schema 
    });
  })
});

test('schema | type = String, isRequired = true', t => {
  const source = {
    foo: '1',
    bar: '2'
  }
  const schema = {
    foo: {
      type: String,
      required: true,
    }
  }

  const dist = mapRuler.enforce(source);
  t.deepEqual(source, dist);
});

