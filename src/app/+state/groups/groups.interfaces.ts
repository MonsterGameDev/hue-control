import { Behaviors } from '../app.interfaces';
import {
  Action,
  GroupState,
  Locations,
  Stream,
} from '../hue-domain/hue-domain.interfaces';

export interface GroupsState {
  groups: Group[];
  behaviors: Behaviors;
  selectedGroup?: Group;
}

export interface Group {
  id: string;
  name: string;
  lights: any[];
  sensors: any[];
  type: string;
  state: GroupState;
  recycle: boolean;
  class: string;
  stream: Stream;
  locations: Locations;
  action: Action;
}

export interface GroupActionUpdate {
  id: string;
  body: GroupActionUpdateRequest;
}

export interface GroupActionUpdateRequest {
  on?: boolean;
  bri?: number;
  hue?: number;
  sat?: number;
  xy?: any;
  ct?: number;
  transitiontime?: number;
  bri_inc?: number;
  hue_inc?: number;
  sat_inc?: number;
  xy_inc?: any;
  ct_inc?: number;
  scene?: string;
  effect?: string;
  alert?: string;
  colormode?: string;
}

export interface GroupActionUpdateResponse {
  success?: {
    address?: string;
    value?: string;
  };
}
