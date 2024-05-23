AFRAME.registerComponent("move-car",{
    schema: {
        moveX : {type : 'number', default:1},
        clickCounter : {type: 'number', default:0}
    },

    tick: function () {
        window.addEventListener('click',(e)=>{
            this.data.moveX = this.data.moveX -0.01;
            this.data.clickCounter = this.data.clickCounter +1;
        })

        var pos = this.el.getAttribute('position');

        posx = this.data.moveX;
        posy = 1;

        this.el.setAttribute('position',{x : posx,y:posy});
        console.log(this.data.clickCounter);
    }
});