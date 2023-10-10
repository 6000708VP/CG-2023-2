const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function trazarEjes() {
	const axesHelper = new THREE.AxesHelper(5); // Longitud de los ejes
    scene.add(axesHelper);
	}
	
	trazarEjes(); 

function cubo(x, y, z, scale, textureUrl) {
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(textureUrl);

    const geometry = new THREE.Geometry();
    geometry.vertices.push(
	  new THREE.Vector3(-0.5, -0.5, -0.5),
      new THREE.Vector3(0.5, -0.5, -0.5),
      new THREE.Vector3(0.5, -0.5, 0.5),
      new THREE.Vector3(-0.5, -0.5, 0.5),
      new THREE.Vector3(-0.5, 0.5, -0.5),
      new THREE.Vector3(0.5, 0.5, -0.5),
      new THREE.Vector3(0.5, 0.5, 0.5),
      new THREE.Vector3(-0.5, 0.5, 0.5)
	);
            
    geometry.faces.push(
      new THREE.Face3(0, 1, 5),
      new THREE.Face3(0, 5, 4),
      new THREE.Face3(1, 2, 6),
      new THREE.Face3(1, 6, 5),
      new THREE.Face3(2, 3, 7),
      new THREE.Face3(2, 7, 6),
      new THREE.Face3(3, 0, 4),
      new THREE.Face3(3, 4, 7),
      new THREE.Face3(4, 5, 6),
      new THREE.Face3(4, 6, 7),
      new THREE.Face3(0, 3, 2),
      new THREE.Face3(0, 2, 1)
    );
            
    geometry.computeFaceNormals();

    geometry.faceVertexUvs[0] = [];
    for (let i = 0; i < geometry.faces.length; i++) {
		const face = geometry.faces[i];
        const uvs = [];
        for (let j = 0; j < 3; j++) {
			const vertexIndex = face.a + (j % 3);
            const vertex = geometry.vertices[vertexIndex];
            uvs.push(new THREE.Vector2((vertex.x + 0.5), (vertex.y + 0.5)));
        }
        geometry.faceVertexUvs[0].push(uvs);
    }

    const material = new THREE.MeshBasicMaterial({ wireframe: false, side: THREE.DoubleSide, map: texture });
    const customMesh = new THREE.Mesh(geometry, material);
    customMesh.position.set(x, y, z); 
    customMesh.scale.set(scale, scale, scale); 
    scene.add(customMesh); 
}

  camera.position.z = 5;
  camera.position.x = 2;
  camera.position.y = 2;

cubo(0, 0, 0, 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrd8mfiyUkySn4roH5SPgYwAB_zY2UojjRwA&usqp=CAU');
cubo(0, 0.75, 0, 0.5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqe_3erUYT9IXoM0UXUat3CqREF9fdHaohg&usqp=CAU');
cubo(0, 1.125, 0, 0.25, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDBAHUujyO2xqskOHjMa4K1I_C9mKvV5FjX_EKmSeFetdPUdZgW0JDzAMfKVXCmkBTYc&usqp=CAU');


function animate() {
	requestAnimationFrame(animate);
    renderer.render(scene, camera);
	}
	
	animate();

 