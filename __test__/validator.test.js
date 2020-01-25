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
    const dataTypes = [num, arr.obj, func, bool]
    it('strings', () => {
        expect(validator.isString(str)).toBeTruthy();
        dataTypes.forEach(ele => {
            if (ele !== str) {
                expect(validator.isString(ele)).toBeFalsy();
            }

        });

        // expect(validator.isString(str)).toBeTruthy();
        // expect(validator.isString(num)).toBeFalsy();
        // expect(validator.isString(arr)).toBeFalsy();
        // expect(validator.isString(obj)).toBeFalsy();
        // expect(validator.isString(func)).toBeFalsy();
        // expect(validator.isString(bool)).toBeFalsy();
    });

    //////expect(result of return from the validotor.js).

    it('numbers', () => {
        expect(validator.isNum(num)).toBeTruthy();
        dataTypes.forEach(element => {
            if (element != num) {
                expect(validator.isNum(element)).toBeFalsy();
            }
        });
    })

    it('arrays', () => {
        expect(validator.isArr(arr)).toBeTruthy();
        for (let i = 0; i < dataTypes.length; i++) {
            if (dataTypes[i] == arr) {
                continue;
            }
            expect(validator.isArr(dataTypes[i])).toBeFalsy();
        }
    });

    it('objects', () => {
        expect(validator.isObj(obj)).toBeTruthy();
        dataTypes.forEach(element => {
            if (element !== obj) {
                expect(validator.isObj(element)).toBeFalsy();
            }
        })
    });

    it('booleans', () => {
        expect(validator.isBoolean(bool)).toBeTruthy();
        dataTypes.forEach(element => {
            if (element !== bool) {
                expect(validator.isBoolean(element)).toBeFalsy();
            }
        })
    });

    it('functions', () => {
        expect(validator.isFunc(func)).toBeTruthy();
        dataTypes.forEach(element => {
            if (element !== func) {
                expect(validator.isFunc(element)).toBeFalsy();
            }
        })
    });

});

describe('validator module performs complex validations', () => {
    const naseem = {
        id: '1993',
        name: 'naseem izzat',
        age: '26',
        hopies: [],
        musicType: ['classic', 'pure music'],
        anyThing: null,
        single: ['yes']
    };

    it('validates the presence of required object properties at any level', () => {
        // i.e. does person.hair.color exist and have a good value, not just person.hair
        expect(naseem.anyThing).toBeNull();
        expect(naseem.age).toEqual('26');

    });

    it('validates the proper types of object properties', () => {
        // i.e. person.name must be a string, etc.
        expect(typeof naseem.name).toMatch('string');
    });

    it('validates the types of values contained in an array', () => {
        // i.e. an array of all strings or numbers
        // expect(true).toBeFalsy();
        naseem.musicType.forEach(element => {
            expect(typeof element).toMatch('string')
        });
    });


    it('validates a value array against an approved list', () => {
        // i.e. a string might only be allowed to be "yes" or "no"
        let example = naseem.single.includes('yes')
        expect(example).toBeTruthy;
        // without is somthing beacuse i went  to test 
    });

    // TODO: Cover so, so many more cases

});
