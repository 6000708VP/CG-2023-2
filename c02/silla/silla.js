const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.add(camera);
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const geometry1 = new THREE.CylinderGeometry( 1, 1 );
const material = new THREE.MeshNormalMaterial( { color: 0x00ffff} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5;
cube.position.x = -2;
cube.position.y = -2;
const cylinder = new THREE.Mesh(geometry1,material);
scene.add(cylinder);
cylinder.position.y = 1;
cylinder.position.x = 0;

function rend() {
    renderer.render( scene, camera ); 
}

rend(); 