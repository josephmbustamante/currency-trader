import { Button, createButton } from 'src/components/main-menu-button';

const sceneConfig: Phaser.Scenes.Settings.Config = {
  active: false,
  visible: false,
  key: 'MainMenu',
};

/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.add.text(100, 50, 'Currency Trader', { fill: '#FFFFFF' }).setFontSize(24);
    new Button(this, 100, 150, 'Start Game', () => {
      this.scene.start('Game');
    });
    new Button(this, 100, 200, 'Settings', () => console.log('settings button clicked'));
    new Button(this, 100, 250, 'Help', () => console.log('help button clicked'));
    createButton(this, 100, 300, 50, 30, 'Test', () => console.log('click'));
  }
}
