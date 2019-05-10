const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionsSchema = new Schema({
   description: {
       type: String
   },
   concept: {
       type: String
   },
    mcc: {
       type: String
   },
   type: {
       type: String
   },
   amount: {
       type: Number
   },
   currency: {
       type: String,
   },
   amount_fee: {
       type: Number
   },
   currency_fee: {
       type: String 
   },
   amount_in_transit: {
       type: Number
   },
   currency_in_string: {
       type: String
   },
   date: {
       type: Date
   },
   cat: {
       type: String
   },
   subcat: {
    type: String
   },
   folio: {
    type: String
   }
});

export default mongoose.model("Transactions", TransactionsSchema);