
import { _decorator, Component, Animation, Node, animation, AnimationComponent, v2 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = arrowanimation
 * DateTime = Sat May 28 2022 16:32:40 GMT+0200 (hora de verano de Europa central)
 * Author = Oriol1106
 * FileBasename = arrowanimation.ts
 * FileBasenameNoExtension = arrowanimation
 * URL = db://assets/scripts/arrowanimation.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('arrowanimation')
export class arrowanimation extends Component {

    @property({
        type: Animation
    })



    backAnim: Animation | null = null;

    private isBack = false;
    
    Play_Arrow(){
        if(this.isBack)
        {
            this.Resume_Arrow();
        } else
        {
            this.Back_Arrow();

        }
        /*this.isBack = false;
        this.backAnim.play('arrowback');*/
    }

    Resume_Arrow(){
        this.backAnim.play('arrowidle');
        this.isBack = false;
    }

    Back_Arrow(){
        this.backAnim.play('arrowback');
        this.isBack = true;
    }

    start(){
        this.backAnim.play('arrowidle');
    }
    
    update(deltaTime: number){
    }
}
    /*OnceEnd(){
        this._isIdle = true;
        if(this.backAnim){
            this.backAnim.play('player_idle')
        }
    }*/
