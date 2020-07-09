import * as assert from 'assert';
import { ReferenceParser } from '../../reference-parser';

suite.only('ReferenceParser', () => {
	test('parses simple module', () => {
    let source = 'module Mod';
    let parser = new ReferenceParser(source);
    let result = parser.parse();
		assert.deepEqual(result, ['Mod']);
	});
});