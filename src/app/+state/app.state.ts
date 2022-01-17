import { Flow, FlowState } from './flow/flow.interfaces';
import { GroupsState } from './groups/groups.interfaces';
import { LightsState } from './lights/lights.interfaces';
import { ScenesState } from './scenes/scenes.interfaces';

export interface AppState {
  lightsslice?: LightsState;
  groupsslice?: GroupsState;
  flowslice?: FlowState;
  scenesslice?: ScenesState;
  domainslice?: any;
}
