import { Behaviors } from '../app.interfaces';
import {
  Action,
  GroupState,
  Locations,
  Stream,
} from '../hue-domain/hue-domain.interfaces';

export interface Groups {
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
