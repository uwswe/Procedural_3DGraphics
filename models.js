/**
 * Created by amjen on 3/13/2017.
 */

//var treeObjects = [];
function tree()
{
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
    loader.load('three.js-master/examples/obj/weepingWillow/weeping-willow-t.jpg', function (image) {
        texture.image = image;
        texture.needsUpdate = true;
    });

// model

    var loader = new THREE.OBJLoader(manager);
    loader.load('three.js-master/examples/obj/weepingWillow/weepingWillow.obj', function (object) {
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material.map = texture;
            }
        });

        //object.position.set(vegetationTilePositions[i].x, vegetationTilePositions[i].y, vegetationTilePositions[i].z);
        object.position.set(0, 0, 0);
        object.scale.set(.25, .25, .25);
        treeObjects.push(object);
        //scene.add(object);
    }, onProgress, onError);
}