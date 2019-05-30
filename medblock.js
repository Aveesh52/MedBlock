var express = require('express');
var router = express.Router();
var Web3 = require('web3');
var Tx = require('ethereumjs-tx');

var ethereum_config = require('./config/ethereum_config'); 

var app = express();

var web3 = new Web3(new Web3.providers.HttpProvider(ethereum_config.host_ip));



router.get('/getPatient', function(req, res) {
  console.log("add" + ethereum_config.contract_address); 

  var MedBlock = new web3.eth.Contract(ethereum_config.contract_abi,ethereum_config.contract_address); 



  MedBlock.methods.getPatient().call({from: req.params.contract_adds}, function(error, result){

    if(!error){

      console.log(result);
      res.json(result);
    }
    else{
     console.error(error);
     res.json(error);
   }
 });


});

router.get('/getDoctor', function(req, res) {
  console.log("add" + ethereum_config.contract_address); 

  var MedBlock = new web3.eth.Contract(ethereum_config.contract_abi,ethereum_config.contract_address); 



  MedBlock.methods.getDoctor().call({from: req.params.contract_adds}, function(error, result){

    if(!error){

      console.log(result);
      res.json(result);
    }
    else{
     console.error(error);
     res.json(error);
   }
 });


});

router.get('/setPatient', function(req, res) {
  console.log("add" + ethereum_config.contract_address); 

  var MedBlock = new web3.eth.Contract(ethereum_config.contract_abi,ethereum_config.contract_address); 



  MedBlock.methods.getPatient().call({from: req.params.contract_adds}, function(error, result){

    if(!error){

      console.log(result);
      res.json(result);
    }
    else{
     console.error(error);
     res.json(error);
   }
 });


});

router.get('/setDoctor', function(req, res) {
  console.log("add" + ethereum_config.contract_address); 

  var MedBlock = new web3.eth.Contract(ethereum_config.contract_abi,ethereum_config.contract_address); 



  MedBlock.methods.setDoctor().call({from: req.params.contract_adds}, function(error, result){

    if(!error){

      console.log(result);
      res.json(result);
    }
    else{
     console.error(error);
     res.json(error);
   }
 });


});
router.get('/grantAccessToDoctor', function(req, res) {
  console.log("add" + ethereum_config.contract_address); 

  var MedBlock = new web3.eth.Contract(ethereum_config.contract_abi,ethereum_config.contract_address); 



  MedBlock.methods.grantAccessToDoctor().call({from: req.params.contract_adds}, function(error, result){

    if(!error){

      console.log(result);
      res.json(result);
    }
    else{
     console.error(error);
     res.json(error);
   }
 });


});

router.get('/getPatientInfoForDoctor', function(req, res) {
  console.log("add" + ethereum_config.contract_address); 

  var MedBlock = new web3.eth.Contract(ethereum_config.contract_abi,ethereum_config.contract_address); 



  MedBlock.methods.getPatientInfoForDoctor().call({from: req.params.contract_adds}, function(error, result){

    if(!error){

      console.log(result);
      res.json(result);
    }
    else{
     console.error(error);
     res.json(error);
   }
 });


});


module.exports = router;