'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const stripe = require("stripe")("pk_test_51IwrcISItNLXFWd1qbwdU17UyhbbdCfsvSpXI7Mx2qlmCJnjeGq9ifQs6Pxgs2y6gXW4a1plckjzZJFnHEAieXAl00qzLMU52v");

 module.exports = {
     create: async (ctx) => {
         const {address,amount,dishes,token,city,state} = JSON.parse(
             ctx.request.body
         );
         const stripeAmount = Math.floor(amount*100);
         const charge = await stripe.charges.create({
             amount: stripeAmount,
             currency: "inr",
             description: `Order ${new Date()} by ${ctx.state.user,_id}`,
             source: token,
         });
         const order = await strapi.services.order.create({
             user: ctx.state.user.id,
             charge_id: charge.id,
             amount: stripeAmount,
             address,
             dishes,
             city,
             state,
         });
         return order 
     },
 };
