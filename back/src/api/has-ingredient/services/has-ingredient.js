'use strict';

/**
 * has-ingredient service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::has-ingredient.has-ingredient');
