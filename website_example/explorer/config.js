var api = 'http://dyngepeng.zapto.org:7776';
var donationAddress = "";
var blockTargetInterval = 30; // enter the block interval in seconds
var coinUnits = 100;  // enter in the amount of atomic units in 1 coin, eg. 100 shells = 1 trtl
var totalSupply =  100000000000000; // enter the total supply in atomic units
var symbol = 'dynge'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
  'dynge': [

    ['dyngepeng.zapto.org/DYNGE', 'http://dyngepeng.zapto.org:4550'],
    ['poolice.sytes.net', 'http://poolice.sytes.net:4560'],
    ['firsty.ddns.net:7767', 'http://firsty.ddns.net:7768'],


  ]
};

var networkStat2 = {
    "trtl": [
	[""]
 ]
};
