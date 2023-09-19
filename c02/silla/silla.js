const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
scene.add(camera);
// Crea el asiento de la silla (un cubo)
const seatGeometry = new THREE.BoxGeometry(4, 0.2, 4); // Ancho, alto y profundidad del asiento
const seatMaterial = new THREE.MeshNormalMaterial({ color: 0x00ffff });
const seat = new THREE.Mesh(seatGeometry, seatMaterial);
seat.position.set(0, 2, 0); // Coloca el asiento sobre el suelo
scene.add(seat);

// Crea el respaldo de la silla (un cilindro)
const backrestGeometry = new THREE.CylinderGeometry(1, 1, 10, 40); // Radio y altura del respaldo
const backrestMaterial = new THREE.MeshNormalMaterial({ color: 0xffffff });
const backrest = new THREE.Mesh(backrestGeometry, backrestMaterial);
backrest.rotation.x = Math.PI / 2; // Orienta el respaldo en el plano x/y
backrest.position.set(0, 3, -1.8); // Coloca el respaldo detrás del asiento
scene.add(backrest);

// Agrega patas de la silla (cuatro cilindros)
const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 22); // Radio y altura de las patas
const legMaterial = new THREE.MeshNormalMaterial({ color: 0x00ff00 });

const Leg1 = new THREE.Mesh(legGeometry, legMaterial);
Leg1.position.set(-1.5, 1, -1.5); // pata delantera izquierda
scene.add(Leg1);

const Leg2 = new THREE.Mesh(legGeometry, legMaterial);
Leg2.position.set(1.5, 1, -1.5); //  pata delantera derecha
scene.add(Leg2);

const Leg3 = new THREE.Mesh(legGeometry, legMaterial);
Leg3.position.set(-1.5, 1, 1.5); //  pata trasera izquierda
scene.add(Leg3);

const Leg4 = new THREE.Mesh(legGeometry, legMaterial);
Leg4.position.set(1.5, 1, 1.5); //  pata trasera derecha
scene.add(Leg4);

camera.position.z = 7;
camera.position.y = 2;
camera.rotation.z=1;


function animate() {
    requestAnimationFrame(animate);
 
    renderer.render(scene, camera);
}

animate();