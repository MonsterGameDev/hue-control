//  ===================================
// DOMAIN STATE
//  ===================================

import { Behaviors } from "../app.interfaces";

export interface Domain {
  response: any;
  behaviors: Behaviors
}

// ===================================
// LIGHTS RELEVANT INTERFACES - DOMAIN
// ===================================

export interface State {
  on: boolean;
  bri: number;
  hue: number;
  sat: number;
  effect: string;
  xy: number[];
  ct: number;
  alert: string;
  colormode: string;
  mode: string;
  reachable: boolean;
}

export interface Swupdate {
  state: string;
  lastinstall: string;
}

export interface Capabilities {
  certified: boolean;
  control: Control;
  streaming: Streaming;
}

export interface Control {
  mindimlevel: number;
  maxlumen: number;
  colorgamuttype: string;
  colorgamut: number[][];
  ct: Ct;
}

export interface Streaming {
  renderer: boolean;
  proxy: boolean;
}

export interface Ct {
  min: number;
  max: number;
}

export interface Config {
  archetype: string;
  function: string;
  direction: string;
  startup: Startup;
}

export interface Startup {
  mode: string;
  configured: boolean;
}


// =====================================
// GROUP RELEVANT INTERFACES - DOMAIN
// =====================================

export interface GroupState {
  all_on: boolean;
  any_on: boolean;
}
export interface Stream {
  proxymode: string;
  proxynode: string;
  active: boolean;
  owner: any;
}

export interface Locations {}

export interface Action {
  alert?: string;
  on?: boolean;
  bri?: number;
  hue?: number;
  sat?: number;
  effect?: string;
  xy?: number[];
  ct?: number;
  colormode?: any;
}
