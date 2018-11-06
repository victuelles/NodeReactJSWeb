const keys= require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')

module.exports=(app)=>{

    app.post('/api/stripe',requireLogin,async (req,res)=>{

      const charge= await stripe.charges.create({
        amount: 500,
        currency: "usd",
        description: "$5 for 5 credits",
        source: req.body.id, // obtained with Stripe.js
      });
      //user model, add 5 credit units, send updated user
      req.user.credits+=5
      //get updated user model, separate obj in memory
      const user= await req.user.save()
      res.send(user)

    })


}

/*
//user=
{"credits":5,"_id":"5bd37661e43bb3e2cccdd322","googleId":"104738918586230968372","__v":0}
   //console.log(req.body)

[0] { id: 'tok_1DTK3v21Q5ohDTUwylgA554P',
[0]   object: 'token',
[0]   card:
[0]    { id: 'card_1DTK3v21Q5ohDTUwYJKoZoPz',
[0]      object: 'card',
[0]      address_city: null,
[0]      address_country: null,
[0]      address_line1: null,
[0]      address_line1_check: null,
[0]      address_line2: null,
[0]      address_state: null,
[0]      address_zip: null,
[0]      address_zip_check: null,
[0]      brand: 'Visa',
[0]      country: 'US',
[0]      customer: null,
[0]      cvc_check: 'pass',
[0]      dynamic_last4: null,
[0]      exp_month: 10,
[0]      exp_year: 2022,
[0]      fingerprint: 'pVuZTe1UnwTO2L75',
[0]      funding: 'credit',
[0]      last4: '4242',
[0]      metadata: {},
[0]      name: 'rom.victuelles@gmail.com',
[0]      tokenization_method: null,
[0]      type: 'Visa' },
[0]   client_ip: '73.15.45.184',
[0]   created: 1541470383,
[0]   email: 'rom.victuelles@gmail.com',
[0]   livemode: false,
[0]   type: 'card',
[0]   used: false }


console.log(charge)
{ id: 'ch_1DTKBN21Q5ohDTUwQua8Pre4',
[0]   object: 'charge',
[0]   amount: 500,
[0]   amount_refunded: 0,
[0]   application: null,
[0]   application_fee: null,
[0]   balance_transaction: 'txn_1DTKBN21Q5ohDTUwqLIjFzii',
[0]   captured: true,
[0]   card:
[0]    { id: 'card_1DTKBK21Q5ohDTUwDietOzoT',
[0]      object: 'card',
[0]      address_city: null,
[0]      address_country: null,
[0]      address_line1: null,
[0]      address_line1_check: null,
[0]      address_line2: null,
[0]      address_state: null,
[0]      address_zip: null,
[0]      address_zip_check: null,
[0]      brand: 'Visa',
[0]      country: 'US',
[0]      customer: null,
[0]      cvc_check: 'pass',
[0]      dynamic_last4: null,
[0]      exp_month: 10,
[0]      exp_year: 2020,
[0]      fingerprint: 'pVuZTe1UnwTO2L75',
[0]      funding: 'credit',
[0]      last4: '4242',
[0]      metadata: {},
[0]      name: 'rom.victuelles@gmail.com',
[0]      tokenization_method: null,
[0]      type: 'Visa' },
[0]   created: 1541470845,
[0]   currency: 'usd',
[0]   customer: null,
[0]   description: '$5 for 5 credits',
[0]   destination: null,
[0]   dispute: null,
[0]   failure_code: null,
[0]   failure_message: null,
[0]   fraud_details: {},
[0]   invoice: null,
[0]   livemode: false,
[0]   metadata: {},
[0]   on_behalf_of: null,
[0]   order: null,
[0]   outcome:
[0]    { network_status: 'approved_by_network',
[0]      reason: null,
[0]      risk_level: 'normal',
[0]      risk_score: 32,
[0]      seller_message: 'Payment complete.',
[0]      type: 'authorized' },
[0]   paid: true,
[0]   payment_intent: null,
[0]   receipt_email: null,
[0]   receipt_number: null,
[0]   refunded: false,
[0]   refunds: [],
[0]   review: null,
[0]   shipping: null,
[0]   source:
[0]    { id: 'card_1DTKBK21Q5ohDTUwDietOzoT',
[0]      object: 'card',
[0]      address_city: null,
[0]      address_country: null,
[0]      address_line1: null,
[0]      address_line1_check: null,
[0]      address_line2: null,
[0]      address_state: null,
[0]      address_zip: null,
[0]      address_zip_check: null,
[0]      brand: 'Visa',
[0]      country: 'US',
[0]      customer: null,
[0]      cvc_check: 'pass',
[0]      dynamic_last4: null,
[0]      exp_month: 10,
[0]      exp_year: 2020,
[0]      fingerprint: 'pVuZTe1UnwTO2L75',
[0]      funding: 'credit',
[0]      last4: '4242',
[0]      metadata: {},
[0]      name: 'rom.victuelles@gmail.com',
[0]      tokenization_method: null,
[0]      type: 'Visa' },
[0]   source_transfer: null,
[0]   statement_description: null,
[0]   statement_descriptor: null,
[0]   status: 'paid',
[0]   transfer_group: null }

*/