import { Flow } from './flow/flow.interfaces';
import { Groups } from './groups/groups.interfaces';
import { Lights } from './lights/lights.interfaces';
import { Scenes } from './scenes/scenes.interfaces';

export interface AppState {
  lights: Lights;
  groups: Groups;
  flow: Flow;
  scenes: Scenes;
  domain: any;  
}
