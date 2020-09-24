import { Inject } from '@nestjs/common';

export function Mariadb(poolName: string = '') {
  return Inject(`Mariadb${poolName}`);
}
