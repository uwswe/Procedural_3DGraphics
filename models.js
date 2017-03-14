/**
 * Created by amjen on 3/13/2017.
 */

function weepingWillow(treePos) {
    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {
        console.log(item, loaded, total);
    };

    var texture = new THREE.Texture();

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    var onError = function (xhr) {
    };

    var loader = new THREE.ImageLoader(manager);
    loader.load('models/vegetation/weepingWillow/weeping-willow-t.jpg', function (image) {
        texture.image = image;
        texture.needsUpdate = true;
    });

    var loader = new THREE.OBJLoader(manager);
    loader.load('models/vegetation/weepingWillow/weepingWillow.obj', function (object) {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.map = texture;
            }
        });

        object.position.set(treePos.x, .4, treePos.z);
        object.scale.set(.25, .25, .25);
        scene.add(object);
    }, onProgress, onError);
}

function oakTree(treePos) {
    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {
        console.log(item, loaded, total);
    };

    var texture = new THREE.Texture();

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    var onError = function (xhr) {
    };

    var loader = new THREE.ImageLoader(manager);
    loader.load('models/vegetation/OakTree/leaves_02.jpg', function (image) {
        texture.image = image;
        texture.needsUpdate = true;
    });

    var loader = new THREE.OBJLoader(manager);
    loader.load('models/vegetation/OakTree/OakTree.obj', function (object) {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.map = texture;
            }
        });

        object.position.set(treePos.x, .4, treePos.z);
        object.scale.set(.1, .1, .1);
        scene.add(object);
    }, onProgress, onError);
}

function house(housePos) {
    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {
        console.log(item, loaded, total);
    };

    var texture = new THREE.Texture();

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    var onError = function (xhr) {
    };

    var loader = new THREE.ImageLoader(manager);
    loader.load('models/structures/house/plaster_bare_6035_8712_Small.jpg', function (image) {
        texture.image = image;
        texture.needsUpdate = true;
    });

    var loader = new THREE.OBJLoader(manager);
    loader.load('models/structures/house/house1.obj', function (object) {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.map = texture;
            }
        });

        object.position.set(housePos.x, .4, housePos.z);
        object.scale.set(.5, .5, .5);
        scene.add(object);
    }, onProgress, onError);
}