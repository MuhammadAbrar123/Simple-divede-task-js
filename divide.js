var num = 100;
var den = 6;
var ans = num / den;
let a = Math.floor(ans);
let c = a * den;
let def = num - c;
let ad=0;
for (let i = 1; i <= den - def; i++) {
  ad++;
  console.log(ad,'->', a);
}

if (def != 0) {
  for (let j = def; j > -def; j--) {
    ad++;
    console.log(ad,'->', a + 1);
    def--;
  }
}
