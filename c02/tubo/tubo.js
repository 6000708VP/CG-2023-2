const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;
const renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

 const curve = new THREE.CatmullRomCurve3([
 new THREE.Vector3(-2, 0, 0),
 new THREE.Vector3(-1, 1, 0),
 new THREE.Vector3(0, 0, 0),
 new THREE.Vector3(1, -1, 0),
 new THREE.Vector3(2, 0, 0)
 ]);

const points = curve.getPoints(50);

const geometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 100, 0.1, 20, false);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const tube = new THREE.Mesh(geometry, material);
scene.add(tube);

const animate = function () {
requestAnimationFrame(animate);
 tube.rotation.x += 0.01;
 tube.rotation.y += 0.01;

 renderer.render(scene, camera);
};

animate();