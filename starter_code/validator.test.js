'use strict';

const validator = require('../lib/validator.js');

describe('validator module performs basic validation of', () => {

    // TODO: Make this series of tests less repetitive ... DRY it out

    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = { x: 'y' };
    let func = () => { };
    let bool = false;
    it('strings', () => {
        const thingsType = [num, arr, obj, fun, bool]
        expect(validator.isString(str)).toBeTruthy();
        thingsType.map(ele => {
            expect(validator.isString(ele)).toBeFalsy();

        })

        // expect(validator.isString(str)).toBeTruthy();
        // expect(validator.isString(num)).toBeFalsy();
        // expect(validator.isString(arr)).toBeFalsy();
        // expect(validator.isString(obj)).toBeFalsy();
        // expect(validator.isString(func)).toBeFalsy();
        // expect(validator.isString(bool)).toBeFalsy();
    });

    it('numbers', () => {
        expect(validator.isNum(num)).toBeTruthy();
    });

    it('arrays', () => {
        expect(validator.isArr(arr)).toBeTruthy();
    });

    it('objects', () => {
        expect(validator.isObj(obj)).toBeTruthy();
    });

    it('booleans', () => {
        expect(validator.isBool(bool)).toBeTruthy();
    });

    it('functions', () => {
        expect(validator.isFun(func)).toBeTruthy();
    });

});

describe('validator module performs complex validations', () => {

    it('validates the presence of required object properties at any level', () => {
        // i.e. does person.hair.color exist and have a good value, not just person.hair
        expect(true).toBeFalsy();
    });

    it('validates the proper types of object properties', () => {
        // i.e. person.name must be a string, etc.
        expect(true).toBeFalsy();
    });

    it('validates the types of values contained in an array', () => {
        // i.e. an array of all strings or numbers
        expect(true).toBeFalsy();
    });

    it('validates a value array against an approved list', () => {
        // i.e. a string might only be allowed to be "yes" or "no"
        expect(true).toBeFalsy();
    });

    // TODO: Cover so, so many more cases

});
