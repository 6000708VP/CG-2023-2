const scene = new THREE.Scene();
function Ortogonal(){
	const camera = new THREE.OrthographicCamera(5, -5,5, -5, 3, 10 );
	camera.position.z = 5
	camera.updateProjectionMatrix();
	
}
function Perspectiva(){
	const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.z = 5
	camera.updateProjectionMatrix();
}
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.add(camera);
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const geometry2 = new THREE.SphereGeometry( 1, 10, 10 );
const material = new THREE.MeshNormalMaterial( { color: 0x00ffff} );
const material1 = new THREE.MeshNormalMaterial( { color: 0xffffff} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 5;
cube.position.x = 2;
const sphere = new THREE.Mesh( geometry2, material1 );
scene.add(sphere);
sphere.position.x = -2;


function animate() {
    requestAnimationFrame( animate )
    cube.rotation.x += 0.01; 
    cube.rotation.y += 0.01;
	
	sphere.rotation.x += 0.01; 
    sphere.rotation.y += 0.01;

    renderer.render( scene, camera ); 
}

animate(); 