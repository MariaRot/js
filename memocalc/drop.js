

function Drop(buckets) {
    this.x = random(width);
    this.y = random(-500, -50);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 20);
    this.capacity = this.len * map(this.z, 0, 20, 1, 3);
    this.yspeed = map(this.z, 0, 20, 1, 20);
    
  
    this.fall = function() {
      this.y = this.y + this.yspeed;
      var grav = map(this.z, 0, 20, 0, 0.2);
      this.yspeed = this.yspeed + grav;

      for(var i=0; i<buckets.length;i++) {
        if (this.x > buckets[i].x && this.x < (buckets[i].x + buckets[i].width)) {
          if (this.y > buckets[i].y) {
            if(!buckets[i].isFull()) {
              buckets[i].capacity+=this.capacity;
              this.respawn();
              console.log(`Galeata ${i} contine ${buckets[i].capacity}`);
            }
            else if(buckets[i].message === false) {
              var elapsed = new Date() - buckets[i].start;
              document.getElementById('text').innerHTML += `Galeata ${i} s-a umplut in ${elapsed/1000} secunde <br>`;
              buckets[i].message = true;
              buckets[i].img = loadImage('buckett.png');
            }
          }

        }
      }
  
      if (this.y > height) {
        this.respawn();
      }
    };
  
    this.show = function() {
      var thick = map(this.z, 0, 20, 1, 3);
      strokeWeight(thick);
      stroke(63, 72, 204);
      line(this.x, this.y, this.x, this.y + this.len);
    };
    this.respawn = function() {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }