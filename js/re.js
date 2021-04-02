// Current Date in Nav Bar
function myFunction() {
  var d = new Date();
  var n = d.toLocaleDateString();
  // alert("hello");
  // var n = d.getTime();
  // var dateAsString = d.toLocaleDateString();
  // return dateAsString;
  document.getElementById("date").innerHTML = n;
}

document.addEventListener("DOMContentLoaded", function(){
  myFunction();
})

// Array of Popular Cryptocurrencies
const crypto = [
  "<a href='https://en.wikipedia.org/wiki/Bitcoin'>Bitcoin(BTC)</a>", 
  "<a href='https://en.wikipedia.org/wiki/Polkadot_(cryptocurrency)'>Polkadot(DOT)</a>",
  "<a href='https://en.bitcoinwiki.org/wiki/ChainLink#:~:text=ChainLink%20is%20a%20decentralized%20blockchain%20oracles%20service.%20The,exchange%20assets%20without%20the%20involvement%20of%20third%20parties'>Chainlink(LINK)</a>",
  "<a href='https://en.wikipedia.org/wiki/Dogecoin'>Dogecoin(DOGE)</a>",
  "<a href='https://en.wikipedia.org/wiki/Filecoin#:~:text=Filecoin%20%28⨎%29%20is%20an%20open-source%2C%20public%20cryptocurrency%20and,allowing%20users%20to%20rent%20unused%20hard%20drive%20space.'>Filecoin(FIL)</a>"
];
const cryptoString = crypto.join(" ");
document.getElementById("crypto1").innerHTML = cryptoString;

