container = document.getElementById("point-cloud");

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  container.offsetWidth / container.offsetHeight,
  1,
  1000
);

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(container.offsetWidth, container.offsetHeight);
renderer.setClearColor(0x000000, 0);
container.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var geometry = new THREE.SphereGeometry(1, 32, 32);
var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
var group = new THREE.Group();

// JIHO CHOI

var camera_pivot = new THREE.Object3D();
// var Y_AXIS = new THREE.Vector3(0, 1, 0);
var Y_AXIS = new THREE.Vector3(0, -1, 0);
var Y_AXIS = new THREE.Vector3(0, -1, 1);

scene.add(camera_pivot);
camera_pivot.add(camera);
camera.position.set(200, 0, 0);
camera.lookAt(camera_pivot.position);

for (i = 0; i <= 100; i += 20) {
  for (j = 0; j <= 100; j += 25) {
    var material = new THREE.MeshBasicMaterial({
      color: Math.random() * 0xffffff
    });
    // point.position.set(i * Math.random(), i * Math.random(), 0)
    // x = i * Math.random()
    var point
    r = 120;
    x = i;
    y = j;
    z = Math.sqrt(r * r - x * x - y * y);

    if (Number.isNaN(z)) {
      continue;
    }
    console.log(x, y, z);

    // directions = [
    //   [1, 1, 1], [1, 1, -1], [1, -1, 1], [1, -1, -1],
    //   [-1, 1, 1], [-1, 1, -1], [-1, -1, 1], [-1, -1, -1],
    // ]
    // for (i = 0; i < 8; i++) {
    //   // console.log(directions[i])
    //   point = new THREE.Mesh(geometry, material);
    //   point.position.set(x * directions[i][0], y * directions[i][1], z * directions[i][2]);
    //   group.add(point);
    // }

    point = new THREE.Mesh(geometry, material);
    point.position.set(x, y, z);
    group.add(point);
    point = new THREE.Mesh(geometry, material);
    point.position.set(x, y, -z);
    group.add(point);
    point = new THREE.Mesh(geometry, material);
    point.position.set(x, -y, z);
    group.add(point);
    point = new THREE.Mesh(geometry, material);
    point.position.set(x, -y, -z);
    group.add(point);
    point = new THREE.Mesh(geometry, material);
    point.position.set(-x, y, z);
    group.add(point);
    point = new THREE.Mesh(geometry, material);
    point.position.set(-x, y, -z);
    group.add(point);
    point = new THREE.Mesh(geometry, material);
    point.position.set(-x, -y, z);
    group.add(point);
    point = new THREE.Mesh(geometry, material);
    point.position.set(-x, -y, -z);
    group.add(point);
  }
}

scene.add(group);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();
camera.position.z = 5;
camera.position.z = 0;
var animate = function() {
  requestAnimationFrame(animate);
  // group.rotation.x += 0.01;
  // group.rotation.y += 0.005;
  camera_pivot.rotateOnAxis(Y_AXIS, 0.01);
  controls.update();
  renderer.render(scene, camera);
};
animate();
