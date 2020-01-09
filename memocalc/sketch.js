

var drops = [];
var buckets = [];
function setup() {
  createCanvas(1250, 700);
  buckets[0] = new Bucket(buckets);
  buckets[1] = new Bucket(buckets);
  buckets[2] = new Bucket(buckets);
  buckets[2].maxCapacity =100000;

  buckets[0].setup();
  buckets[1].setup();
  buckets[2].setup();
  for (var i = 0; i < 550; i++) {
    drops[i] = new Drop(buckets);
  }
}

function draw() {
  background(230, 230, 250);
  buckets[0].show();
  buckets[1].show();
  buckets[2].show();
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }


}