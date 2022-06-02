
import { _decorator, Component, Node, misc, Animation } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = NewComponent_001
 * DateTime = Wed Jun 01 2022 01:09:47 GMT+0200 (hora de verano de Europa central)
 * Author = Oriol1106
 * FileBasename = NewComponent-001.ts
 * FileBasenameNoExtension = NewComponent-001
 * URL = db://assets/scripts/NewComponent-001.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('cameracontrol')
export class cameracontrol extends Component {

    @property({type:Node})
    private Player_Node = null;

    @property({type:Node})
    private BG_Layer_Back = null;

    @property({type:Node})
    private BG_Layer_Mid = null;

    update (dt) {

        let target_position = this.Player_Node.getPosition();

        target_position.y = misc.clampf(target_position.y,0,220);

        let current_position = this.node.getPosition();

        current_position.lerp( target_position , 0.1, current_position);

        this.node.setPosition(current_position);

        this.BG_Layer_Back.setPosition(current_position.x/2,current_position.y/2);

        this.BG_Layer_Mid.setPosition(current_position.x/4,current_position.y/4);

    }
}

