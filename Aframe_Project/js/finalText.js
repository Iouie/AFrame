AFRAME.registerComponent('finished', {
    init: function () {
        this.entities = [document.querySelector('#tile1'), document.querySelector('#tile2'), document.querySelector('#tile3'), // gets all the tile png for future use
        document.querySelector('#tile4'), document.querySelector('#tile5'), document.querySelector('#tile6')];
    },

    tock: function () {
        let sum = 0;
        let finalText = document.querySelector('#finalText');   
            for(let i = 0; i < 6; i++){      // iterate thru the tile text and check if visibility is off
                if(!this.entities[i].getAttribute('visible')){
                    sum++;     // sum up until person finds all 6 objects
                }
            }
            if(sum === 6){    // once all 6 objects found, victory text in the sky
                finalText.setAttribute('visible', true);
            }
    }
  });