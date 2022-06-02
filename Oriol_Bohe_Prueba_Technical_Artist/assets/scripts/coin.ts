
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('coin')
export class coin extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }

    destroyCoin() {
        setTimeout( () => { this.remove() }, 1 );
    }

    remove() {
        this.node.destroy();
    }
}

