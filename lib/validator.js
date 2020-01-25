'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
  return rules(input);
};

/**
 * @param input 
 * @returns {boolean}
 */
validator.isTtuthy=(input)=>{
  if (input){
    return true 
  }
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';
};


/**
 * Is this a num?
 * @param input
 * @returns {boolean}
 */
validator.isNum = (input) => {
    return typeof input === 'numbre';
  };


/**
 * Is this a arr?
 * @param input
 * @returns {boolean}
 */
validator.isArr = (input) => {
    return Array.isArray(input);
  };


/**
 * Is this a obj?
 * @param input
 * @returns {boolean}
 */
validator.isObj = (input) => {
  if (validator.isArr(input)){
    return false
  }else{

    return typeof input === 'object';
  }
  };

  /**
   * is this a boolean?
   * @param input 
   * @returns {boolean}
   */
  validator.isBoolean =(input)=>{
    return typeof input === "boolean"
  }


/**
 * Is this a func?
 * @param input
 * @returns {boolean}
 */
validator.isFun = (input) => {
    return typeof input === 'function';
  };

  /**
   * @param
   * @returns {boolean}
   */

   validator.isCorrectType =(input)=>{
     let dataTypes = ['string','number','object','boolean','function'];
     for (let i=0;i<dataTypes.length;i++){
       if (typeof input == dataTypes[i]){
         return true;
       }
     }
   };



        
        
