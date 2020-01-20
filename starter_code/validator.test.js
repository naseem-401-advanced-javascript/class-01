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
    // global variable 
    const dataTypes= [num,arr.obj,fun,bool]
    it('strings', () => {
        expect(validator.isString(str)).toBeTruthy();
        dataType.map(ele => {
            expect(validator.isString(ele)).toBeFalsy();

        });

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
    const naseem = {
        id:'1993',
        mame:'naseem izzat',
        age:'26',
        musicType:['classic','pure music'],
        single:['yes']
    };

    it('validates the presence of required object properties at any level', () => {
        // i.e. does person.hair.color exist and have a good value, not just person.hair
        expect(naseem.name).toBeNull();
        expect(nassem.gae).toBeEqual(24);

    });

    it('validates the proper types of object properties', () => {
        // i.e. person.name must be a string, etc.
        expect(typeof naseem.name).toBeMatch('string');
    });

    it('validates the types of values contained in an array', () => {
        // i.e. an array of all strings or numbers
        // expect(true).toBeFalsy();
        naseem.musicType.forEach(element =>{
            expect(typeof element).toBeMatch('string')
        });
    });

    it('validates a value array against an approved list', () => {
        // i.e. a string might only be allowed to be "yes" or "no"
        let example = naseem.single.includes('yes')
        expect(true).toBeTruthy;
    });

    // TODO: Cover so, so many more cases

});
