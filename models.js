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
        var s = Math.random();
        object.scale.set(s, s, s);
        scene.add(object);
    }, onProgress, onError);
}

function autumnTree(treePos) {
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
    loader.load('models/vegetation/scaryTree/bark.jpg', function (image) {
        texture.image = image;
        texture.needsUpdate = true;
    });

    var loader = new THREE.OBJLoader(manager);
    loader.load('models/vegetation/scaryTree/tree.obj', function (object) {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.map = texture;
            }
        });

        object.position.set(treePos.x - 2.5, .4, treePos.z);
        var s = Math.random();
        object.scale.set(s, s, s);
        scene.add(object);
    }, onProgress, onError);
}

function farmhouse(housePos) {
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
    loader.load('models/structures/house/Farmhouse Texture.jpg', function (image) {
        texture.image = image;
        texture.needsUpdate = true;
    });

    var loader = new THREE.ImageLoader(manager);
    loader.load('models/structures/house/Farmhouse Texture Bump Map.jpg', function (image) {
        texture.image = image;
        texture.needsUpdate = true;
    });

    var loader = new THREE.OBJLoader(manager);
    loader.load('models/structures/house/Farmhouse OBJ.obj', function (object) {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.map = texture;
            }
        });

        object.position.set(housePos.x, .4, housePos.z);
        object.scale.set(.1, .1, .1);
        scene.add(object);
    }, onProgress, onError);
}

function ghosthouse(housePos) {
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
    loader.load('models/structures/ghosthouse/Gost House 1 (1).jpg', function (image) {
        texture.image = image;
        texture.needsUpdate = true;
    });

    var loader = new THREE.OBJLoader(manager);
    loader.load('models/structures/ghosthouse/3D models/Gost House (5).obj', function (object) {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.map = texture;
            }
        });

        object.position.set(housePos.x, .4, housePos.z);
        object.scale.set(.01, .01, .01);
        scene.add(object);
    }, onProgress, onError);
}

function stackedRocks(moundPos) {
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
    loader.load('models/stones/stacked/Rock_6_d.png', function (image) {
        texture.image = image;
        texture.needsUpdate = true;
    });

    var loader = new THREE.OBJLoader(manager);
    loader.load('models/stones/stacked/Rock_6.obj', function (object) {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.map = texture;
            }
        });

        object.position.set(moundPos.x, .4, moundPos.z);
        object.scale.set(.5, .5, .5);
        scene.add(object);
    }, onProgress, onError);
}

function rocks(rockPos) {
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
    loader.load('models/stones/rocks/wire.jpg', function (image) {
        texture.image = image;
        texture.needsUpdate = true;
    });

    var loader = new THREE.OBJLoader(manager);
    loader.load('models/stones/rocks/rocks_01_model.obj', function (object) {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.map = texture;
            }
        });

        object.position.set(rockPos.x, .4, rockPos.z);
        object.scale.set(.5, .5, .5);
        scene.add(object);
    }, onProgress, onError);
}