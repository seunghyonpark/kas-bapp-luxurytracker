const accessKeyId = "KASK4NS1D47U3KB8QH1TZ9G5";
const secretAccessKey = "aqVcQb7i9NP-7SEbcfBQEcMjy2qlZXc5LfVOesgR";
const authorization = "Basic " + Buffer.from(accessKeyId + ":" + secretAccessKey).toString("base64")

const option = {
  headers: [
    {
      name: "Authorization",
      value: authorization,
    },
    /*
    {
      name: "x-krn",
      value: "krn:1001:node",
    },
    */
    {
      name: "x-chain-id",
      value: "8217",
    },
  ],
};

const Caver = require("caver-js");
const caver = new Caver(
  new Caver.providers.HttpProvider(
    "https://node-api.klaytnapi.com/v1/klaytn",
    option
  )
);


/*
const accessKeyId = "{{your_accessKeyId}}";
const secretAccessKey = "{{your_secretAccessKey}}";

const option = {
  headers: [
    {name: 'Authorization', value: 'Basic ' + Buffer.from(accessKeyId + ':' + secretAccessKey).toString('base64')},
    {name: 'x-chain-id', value: '8217'},
  ]
}

const caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", option))
*/

module.exports = {accessKeyId, secretAccessKey, authorization, caver}