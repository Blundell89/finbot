import { IRobot } from 'hubot';
import { v4 as uuid } from 'node-uuid';

export default (robot: IRobot) => {
  robot.respond(/guid/i, (res) => {
      res.reply(uuid());
  });
}