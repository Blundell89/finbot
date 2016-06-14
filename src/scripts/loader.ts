import { install } from 'source-map-support';
install();

import { IRobot } from 'hubot';
import HelloScript from '../lib/hello';
import BuildScript from '../lib/build';
import DeployScript from '../lib/deploy';
import GuidScript from '../lib/guid';

module.exports = (robot: IRobot) => {
  HelloScript(robot);
  BuildScript(robot);
  DeployScript(robot);
  GuidScript(robot);
};
