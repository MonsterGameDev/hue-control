import { Flow, FlowState } from './flow/flow.interfaces';
import { Groups } from './groups/groups.interfaces';
import { LightsState } from './lights/lights.interfaces';
import { ScenesState } from './scenes/scenes.interfaces';

export interface AppState {
  lights: LightsState;
  groups: GroupsState;
  flow: FlowState;
  scenes: ScenesState;
  domain: any;
}
