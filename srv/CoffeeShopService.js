// const cds = require("@sap/cds");
// const { SELECT } = require("@sap/cds/lib/ql/cds-ql");

// module.exports = cds.service.impl(async function () {
//     this.on('READ', 'Orders', async (req) => {

//         const db = await cds.connect.to('db');
//         const orders = await db.run(SELECT.from('exam.coffeeshop.Orders'))

//         const day = new Date().getDay();
//         let discount;
//         if (day >= 1 && day <= 3) {
//             discount = 10;
//         }
//         else if (day >= 4 && day <= 5) {
//             discount = 5;
//         }
//         else {
//             discount = -5
//         }
        
//         orders.forEach(element => {
//             element.discount = discount;
//             element.discountAmount = Math.round(element.totalAmount * discount / 100);
//         });
//         return orders;
//     })
// })

// ??????
// pjjojo

