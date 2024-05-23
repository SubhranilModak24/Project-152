AFRAME.registerComponent('gltf-loader', {
    schema: {
      modelUrl: { type: 'string', default:'./Car/scene.gltf' }
    },
  
    init: function () {
      var el = this.el;
      var data = this.data;
  
      // Load GLTF model
      var gltfModel = document.createElement('a-entity');
      gltfModel.setAttribute('gltf-model', this.data.modelUrl);
      gltfModel.setAttribute('rotation',{
        x : 0,
        y : -100,
        z : 0
      })
      el.appendChild(gltfModel);
    }
  });
  