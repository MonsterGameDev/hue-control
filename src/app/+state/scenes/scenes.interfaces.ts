import { Behaviors } from '../app.interfaces';

export interface Scenes {
  scenes: Scene[];
  behaviors: Behaviors;
  selectedSceneId?: string;
}

export interface Scene {
  id: string;
  name: string;
  type: string;
  group: string;
  lights: string[];
  owner: string;
  recycle: boolean;
  locked: boolean;
  appdata: Object;
  picture: string;
  image: any;
  lastupdated: any;
  version: number;
}
