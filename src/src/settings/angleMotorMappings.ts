import { AngleMotorMapping } from '../classes/AngleMotorMapping';

const tightControl = new AngleMotorMapping(
  "Tight Control",
  [0, 45, 90, 135, 180, 225, 225.1, 270, 314.9, 315, 360],
  [1, 1, 1, 0, 0, 0, 0, -1, -1, 1, 1],
  [0, 0, 1, 1, 1, 1, -1, -1, 0, 0, 0]
);
const looseControl = new AngleMotorMapping(
  "Loose Control",
  [0, 45, 90, 135, 180, 180.1, 225, 270, 315, 359.9, 360],
  [1, 1, 1, 0.5, 0, 0, -0.5, -1, -1, -1, 1],
  [0, 0.5, 1, 1, 1, -1, -1, -1, -0.5, 0, 0]
);

export const mappings = {
  "tightControl" : tightControl,
  "looseControl" : looseControl,
};

