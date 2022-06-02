
import { _decorator, Component, director } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('changescene')
export class changescene extends Component {


    Load_SceneA(){
        director.loadScene("sceneA");
    }

    Load_SceneB(){
        director.loadScene("sceneB");
    }

    Load_SceneC(){
        director.loadScene("sceneC");
    }

    start(){
        director.preloadScene("sceneA", function () {
            console.log('Scene A preloaded');
        });
        director.preloadScene("sceneB", function () {
            console.log('Scene B preloaded');
        });
        director.preloadScene("sceneC", function () {
            console.log('Scene C preloaded');
        });
    }



}

