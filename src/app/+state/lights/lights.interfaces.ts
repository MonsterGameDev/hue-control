import { Behaviors } from '../app.interfaces';
import {
  Capabilities,
  Config,
  State,
  Swupdate,
} from '../hue-domain/hue-domain.interfaces';

export interface Lights {
  lights: Light[];
  behaviors: Behaviors;
  selectedLightId?: string;
}

export interface Light {
  id: string;
  state: State;
  swupdate: Swupdate;
  type: string;
  name: string;
  modelid: string;
  manufacturername: string;
  productname: string;
  capabilities: Capabilities;
  config: Config;
  uniqueid: string;
  swversion: string;
  swconfigid: string;
  productid: string;
}
