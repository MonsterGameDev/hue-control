import { Scene } from "../scenes/scenes.interfaces";

export interface Flow {
  projectName: string;
  steps: Step[];
  activeStep: any;
}

export interface Step {
  title: string;
  scene: Scene,
  timeStamp: string;
  transitionTime: number;
  groupId: string;
}

export interface StepRequest {
  sceneIdent: string,
  timeStamp: string;
  transitionTime: number;
  groupId: string;
}
