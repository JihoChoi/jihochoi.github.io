container = document.getElementById("point-cloud");

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75, container.offsetWidth / container.offsetHeight, 1, 1000
);
var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(container.offsetWidth, container.offsetHeight);
renderer.setClearColor(0x000000, 0);
renderer.setClearColor(0x000000, 0.1);
container.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(1, 32, 32);
var group = new THREE.Group();

// JIHO CHOI

var camera_pivot = new THREE.Object3D();
scene.add(camera_pivot);
camera_pivot.add(camera);
camera.lookAt(camera_pivot.position);
camera.position.set(100, 0, 0);
// var R_AXIS = new THREE.Vector3(0, -1, 1);

radius = 50
for (x = -radius; x <= radius; x += 10) {
  for (y = -radius; y <= radius; y += 10) {
    var material = new THREE.MeshBasicMaterial({
      color: Math.random() * 0xffffff
    });
    // point.position.set(i * Math.random(), i * Math.random(), 0)
    // x = i * Math.random()
    var point
    z = Math.sqrt(radius * radius - x * x - y * y);
    if (Number.isNaN(z)) {
      // console.log(x, y, z);
      continue;
    }

    point = new THREE.Mesh(geometry, material);
    point.position.set(x, y, z);
    group.add(point);
    point = new THREE.Mesh(geometry, material);
    point.position.set(x, y, -z);
    group.add(point);
    // point = new THREE.Mesh(geometry, material);
    // point.position.set(x, -y, z);
    // group.add(point);
    // point = new THREE.Mesh(geometry, material);
    // point.position.set(x, -y, -z);
    // group.add(point);
    // point = new THREE.Mesh(geometry, material);
    // point.position.set(-x, y, z);
    // group.add(point);
    // point = new THREE.Mesh(geometry, material);
    // point.position.set(-x, y, -z);
    // group.add(point);
    // point = new THREE.Mesh(geometry, material);
    // point.position.set(-x, -y, z);
    // group.add(point);
    // point = new THREE.Mesh(geometry, material);
    // point.position.set(-x, -y, -z);
    // group.add(point);
  }
}

scene.add(group);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.update();

var animate = function () {
  requestAnimationFrame(animate);
  // group.rotation.x += 0.01;
  group.rotation.y += 0.01;
  // camera_pivot.rotateOnAxis(R_AXIS, 0.01);
  controls.update();
  renderer.render(scene, camera);
};
animate();
