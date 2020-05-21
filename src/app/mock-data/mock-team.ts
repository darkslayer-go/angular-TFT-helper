import * as Item from './mock-item';
import {Team} from '../models/team';

export const khongTacXaThu: Team = {
  name: 'khongTac_XaThu',
  heroes: [
    {
      name: 'Darius',
      inventory: []
    },
    {
      name: 'Jaycy',
      inventory: []
    },
    {
      name: 'Grave',
      inventory: []
    },
    {
      name: 'Wukong',
      inventory: []
    },
    {
      name: 'Ashe',
      inventory: []
    },
    {
      name: 'Jhin',
      inventory: []
    },
    {
      name: 'Kasadin',
      inventory: []
    },
    {
      name: 'Gangplank',
      inventory: [Item.quyThu, Item.giapThienThan, Item.giapThienThan]
    },
    {
      name: 'Thresh',
      inventory: []
    },
  ],
};
