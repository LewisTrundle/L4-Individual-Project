import { AngleMotorMapping } from '../classes/AngleMotorMapping';

const tightControl = new AngleMotorMapping(
  "Tight Control",
  [0, 45, 90, 135, 180, 225, 259.9, 260, 270, 280, 280.1, 315, 360],
  [1, 1, 1, 0, 0, 0, 0, -1, -1, -1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1, 1, -1, -1, -1, 0, 0, 0]
);
const middleControl = new AngleMotorMapping(
  "Middle Control",
  [0, 44.9, 45, 90, 135, 135.1, 180, 225, 259.9, 260, 270, 280, 280.1, 315, 360],
  [1, 1, 1, 1, 0.4, 0, 0, 0, 0, -1, -1, -1, 1, 1, 1],
  [0, 0, 0.4, 1, 1, 1, 1, 1, 1, -1, -1, -1, 0, 0, 0]
);
const looseControl = new AngleMotorMapping(
  "Loose Control",
  [0, 45, 90, 135, 180, 225, 259.9, 260, 270, 280, 280.1, 315, 360],
  [1, 1, 1, 0.5, 0, 0, 0, -1, -1, -1, 1, 1, 1],
  [0, 0.5, 1, 1, 1, 1, 1, -1, -1, -1, 0, 0, 0]
);

export const mappings = {
  "tightControl" : tightControl,
  "middleControl" : middleControl,
  "looseControl" : looseControl,
};

