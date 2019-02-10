/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Capitalization model module.
 * @module model/Capitalization
 * @version 1.0.0
 */
class Capitalization {
    /**
     * Constructs a new <code>Capitalization</code>.
     * @alias module:model/Capitalization
     */
    constructor() { 
        
        Capitalization.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Capitalization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Capitalization} obj Optional instance to populate.
     * @return {module:model/Capitalization} The populated <code>Capitalization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Capitalization();

            if (data.hasOwnProperty('smallCamel')) {
                obj['smallCamel'] = ApiClient.convertToType(data['smallCamel'], 'String');
            }
            if (data.hasOwnProperty('CapitalCamel')) {
                obj['CapitalCamel'] = ApiClient.convertToType(data['CapitalCamel'], 'String');
            }
            if (data.hasOwnProperty('small_Snake')) {
                obj['small_Snake'] = ApiClient.convertToType(data['small_Snake'], 'String');
            }
            if (data.hasOwnProperty('Capital_Snake')) {
                obj['Capital_Snake'] = ApiClient.convertToType(data['Capital_Snake'], 'String');
            }
            if (data.hasOwnProperty('SCA_ETH_Flow_Points')) {
                obj['SCA_ETH_Flow_Points'] = ApiClient.convertToType(data['SCA_ETH_Flow_Points'], 'String');
            }
            if (data.hasOwnProperty('ATT_NAME')) {
                obj['ATT_NAME'] = ApiClient.convertToType(data['ATT_NAME'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} smallCamel
 */
Capitalization.prototype['smallCamel'] = undefined;

/**
 * @member {String} CapitalCamel
 */
Capitalization.prototype['CapitalCamel'] = undefined;

/**
 * @member {String} small_Snake
 */
Capitalization.prototype['small_Snake'] = undefined;

/**
 * @member {String} Capital_Snake
 */
Capitalization.prototype['Capital_Snake'] = undefined;

/**
 * @member {String} SCA_ETH_Flow_Points
 */
Capitalization.prototype['SCA_ETH_Flow_Points'] = undefined;

/**
 * Name of the pet 
 * @member {String} ATT_NAME
 */
Capitalization.prototype['ATT_NAME'] = undefined;






export default Capitalization;
