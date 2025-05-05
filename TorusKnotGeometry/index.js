<<<<<<< HEAD
import * as THREE from "three";
import { OrbitControls } from 'jsm/controls/OrbitControls.js';

const w = window.innerWidth;
const h = window.innerHeight;

//Initializing Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

//Initializing Camera
const fov = 75;
const aspect = w / h;
const near = 0.000000001;
const far = 30;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 29;


const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.03;



//cube
const cubeGeometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const cubeMaterial = new THREE.MeshStandardMaterial({
    color: "white",
    flatShading: true

});
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
const hemi = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
// cubeMesh.position.z = -25;

const wireMat = new THREE.MeshBasicMaterial({
    color:0xffffff,
    wireframe:true
})
const wireMesh = new THREE.Mesh(cubeGeometry, wireMat);
wireMesh.scale.setScalar(1.001)
//Initializing Scene
const scene = new THREE.Scene();
cubeMesh.add(wireMesh)
scene.add(hemi);

scene.add(cubeMesh);

function animate(){
    requestAnimationFrame(animate);
    // cubeMesh.rotation.x += 0.01;
    cubeMesh.rotation.y += 0.01;
    controls.update();

renderer.render(scene, camera);
console.log(animate);
}
=======
import * as THREE from "three";
import { OrbitControls } from 'jsm/controls/OrbitControls.js';

const w = window.innerWidth;
const h = window.innerHeight;

//Initializing Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

//Initializing Camera
const fov = 75;
const aspect = w / h;
const near = 0.000000001;
const far = 30;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 29;


const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.dampingFactor = 0.03;



//cube
const cubeGeometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const cubeMaterial = new THREE.MeshStandardMaterial({
    color: "white",
    flatShading: true

});
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
const hemi = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
// cubeMesh.position.z = -25;

const wireMat = new THREE.MeshBasicMaterial({
    color:0xffffff,
    wireframe:true
})
const wireMesh = new THREE.Mesh(cubeGeometry, wireMat);
wireMesh.scale.setScalar(1.001)
//Initializing Scene
const scene = new THREE.Scene();
cubeMesh.add(wireMesh)
scene.add(hemi);

scene.add(cubeMesh);

function animate(){
    requestAnimationFrame(animate);
    // cubeMesh.rotation.x += 0.01;
    cubeMesh.rotation.y += 0.01;
    controls.update();

renderer.render(scene, camera);
console.log(animate);
}
>>>>>>> 45a6b15a2307fa6516f6bcabc4da7b3522b44ab3
animate();