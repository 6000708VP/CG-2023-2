const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);   
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.Geometry();
geometry.vertices.push(
   new THREE.Vector3(-1, 1, 1),
);
geometry.faces.push(
   new THREE.Face3(0, 1, 5),
   new THREE.Face3(0, 5, 4),
   new THREE.Face3(0, 4, 3),
   new THREE.Face3(0, 2, 1)
);
geometry.computeFaceNormals();
const material = new THREE.MeshNormalMaterial({ color: 0x00ff00,wireframe: true });
const customMesh = new THREE.Mesh(geometry, material);
scene.add(customMesh);
camera.position.z = 5;
function animate() {
 requestAnimationFrame(animate);
 renderer.render(scene, camera);
}
animate();


