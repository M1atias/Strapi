'use strict';

/**
 *  product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({strapi}) =>({
    async find(ctx){
        
        const products = await strapi.service('api::product.product').find(ctx.query);
        return products.results.map((product,i)=>`${i}. ${product.title}`);
    }
}));
