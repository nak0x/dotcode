<template>
<div class="threejs-output-container">
  <div id="threejs-output">

  </div>
</div>
</template>

<script>
import * as THREE from 'three'
import WebGL from "three/addons/capabilities/WebGL";
export default {
  name: "ThreeJs.vue",
  mounted() {

    if ( WebGL.isWebGLAvailable() ) {
      let camera, scene, renderer;

      const mouse = new THREE.Vector2();
      const target = new THREE.Vector2();
      const windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );

      init();
      animate();

      function init() {

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 500 );
        camera.position.z = window.scrollY;

        scene = new THREE.Scene();

        const geometry = new THREE.BoxGeometry( 4, 4, 4 );
        const edges = new THREE.EdgesGeometry( geometry );

        for ( let i = 0; i < 500; i ++ ) {

          const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x777777 } ) );
          line.position.x = Math.random() * 120 - 40;
          line.position.y = Math.random() * 120 - 40;
          line.position.z = Math.random() * 120 - 40;
          line.rotation.x = Math.random() * 2 * Math.PI;
          line.rotation.y = Math.random() * 2 * Math.PI;
          line.rotation.z = Math.random() * 2 * Math.PI;
          scene.add( line );

        }

        renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.querySelector('#threejs-output').appendChild( renderer.domElement );

        document.addEventListener( 'mousemove', onMouseMove, false );
        document.addEventListener( 'wheel', onMouseWheel, false );
        window.addEventListener( 'resize', onResize, false );

      }

      function onMouseMove( event ) {

        mouse.x = ( event.clientX - windowHalf.x );
        mouse.y = ( event.clientY - windowHalf.x );

      }

      function onMouseWheel( event ) {

        camera.position.z = window.scrollY * 0.1;

      }

      function onResize( event ) {

        const width = window.innerWidth;
        const height = window.innerHeight;

        windowHalf.set( width / 2, height / 2 );

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize( width, height );

      }

      function animate() {

        target.x = ( 1 - mouse.x ) * 0.0002;
        target.y = ( 1 - mouse.y ) * 0.0002;

        camera.rotation.x += 0.03 * ( target.y - camera.rotation.x );
        camera.rotation.y += 0.03 * ( target.x - camera.rotation.y );

        requestAnimationFrame( animate );
        renderer.render( scene, camera );

      }

    } else {

      const warning = WebGL.getWebGLErrorMessage();
      alert(warning)

    }

  }
}
</script>

<style scoped>

</style>