import { _decorator, Component, Node, input, Input, EventKeyboard, KeyCode, director, game,} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('pausemenu')
export class pausemenu extends Component {

	private GameIsPaused = false;

	@property(Node)
	pauseMenu: Node | null = null;


		Yes_Clicked(){
			director.loadScene("mainmenu");
			this.GameIsPaused = false;
		}

		No_Clicked(){
			this.pauseMenu.active = false;
			this.GameIsPaused = false;
		}

		start(){
			input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
		}

		onKeyDown (event: EventKeyboard) {
			switch(event.keyCode) {
				case KeyCode.ESCAPE:
					if (this.GameIsPaused)
					{
						this.Resume();
					} else
					{
						this.Pause();
					}

				break;
			}
		}

		Resume(){
			
			this.pauseMenu.active = false;
			this.GameIsPaused = false;
		}

		Pause(){
			this.pauseMenu.active = true;
			this.GameIsPaused = true;

		}


}