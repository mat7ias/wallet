

var contract = {};

var contractAddress = '0xfa52274dd61e1643d2205169732f29114bc240b3';
var contractABI = [{"constant":false,"inputs":[{"name":"your_money","type":"uint256"}],"name":"give_me_all_your_money","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var web3;
$(window).on('load', function() {
    if (web3 === undefined) {
        alert('Could not find web3 Object. Make sure you are using the Chrome browser and have the MetaMask extension installed or try compatible options.');
    }


    contract = web3.eth.contract(contractABI).at(contractAddress);


    $('#deposit_button').click(function() {
        alert("Are you an idiot? Really? Interacting with an unverified contract?");
    });
});
