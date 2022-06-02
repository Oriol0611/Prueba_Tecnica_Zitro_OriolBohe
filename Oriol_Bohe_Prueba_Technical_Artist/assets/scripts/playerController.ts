

import { _decorator, Component, Node, EventKeyboard, macro, Vec2, RigidBody2D, Collider2D, Animation, BoxCollider2D, Contact2DType, IPhysics2DContact, Label, input, Input, KeyCode, Quat, v3, Vec3} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('playerController')
export class playerController extends Component {

    @property({type: Label})
    private scoreLabel: Label | null = null;
    private score: number = 0;

    private collider: any;

    private rigidbody: any;
    private direction: number = 0;
    private walk_force: number = 1000;
    private jump_force: number = 10000;
    private On_The_Ground = false;

    @property({type: Animation})
    runAnim: Animation | null = null;
   



    start () {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        this.rigidbody = this.node.getComponent(RigidBody2D);
        this.collider = this.node.getComponent(BoxCollider2D);
        if( this.collider ) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    update (deltaTime: number) {
        this.rigidbody.applyForceToCenter( new Vec2( this.direction * this.walk_force, 0 ), true );
    }

    onBeginContact( selfCollider: BoxCollider2D, otherCollider: BoxCollider2D, Contact2DType: IPhysics2DContact | null ) {
        
        if( otherCollider.name == "coin<BoxCollider2D>" ){
            otherCollider.node.getComponent("coin").destroyCoin();
            this.score++;
            this.scoreLabel.string = "Score: " + this.score;
        }
        if(otherCollider.name)
        {
            if(selfCollider.tag === 2){
                this.On_The_Ground = true;
            }    
        }
    }


    onKeyDown(event: EventKeyboard) {
        switch ( event.keyCode ) {
            case KeyCode.KEY_A:
            case KeyCode.ARROW_LEFT:
                if(this.On_The_Ground) {
                this.direction = -1;
                this.runAnim.play('player_left');

                break;
            }
            case KeyCode.KEY_D:
            case KeyCode.ARROW_RIGHT:
                if(this.On_The_Ground) {
                this.direction = 1;
                this.runAnim.play('player_run');
                
                break;
            }
            case KeyCode.SPACE:
            case KeyCode.KEY_W:
            case KeyCode.ARROW_UP:
                if(this.On_The_Ground) {
                this.rigidbody.applyForceToCenter( new Vec2( 0, this.jump_force ), true );
                this.runAnim.play('player_jump');
                this.On_The_Ground = false;
                break;
            }
            default:
                break;
        }
    }

    onKeyUp(event: EventKeyboard) {
        switch ( event.keyCode ) {
            case KeyCode.KEY_A:
            case KeyCode.ARROW_LEFT: {
                this.direction = 0;
                this.runAnim.play('player_idle');
                break;
            }
            case KeyCode.KEY_D:
            case KeyCode.ARROW_RIGHT: {
                this.direction = 0;
                this.runAnim.play('player_idle');
                break;
            }
            default:
                break;
        }
    }

}



