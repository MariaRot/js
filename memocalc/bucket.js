function Bucket(buckets) {
    this.width = 125;
    this.height = 150;
    this.capacity = 0;
    this.maxCapacity = 10000;
    this.x = 0;
    this.y = height - this.height;
    this.img = loadImage('bucket.png');
    this.message = false;
    this.start = new Date();
    console.log(buckets);

    this.show = function() {
        image(this.img,this.x,this.y,this.width,this.height);
    }

    this.setup = function() {
        var notOk = false;
        var rand;

        do {
            notOk = false;
            rand =  random(width - this.width);
            for(var i = 0; i < buckets.length; i++) {
                if(rand > (buckets[i].x - buckets[i].width) && rand < (buckets[i].x + buckets[i].width))
                {
                    notOk = true;
                    break;
                }
            }
        } while(notOk);
        this.x = rand;
    }

    this.isFull = function() {
        if(this.capacity > this.maxCapacity) {
            return true;
        }
        return false;
    }


}