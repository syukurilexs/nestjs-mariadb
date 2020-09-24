import * as mariadb from 'mariadb';
import { Provider } from '@nestjs/common';

export type PoolConfig = mariadb.PoolConfig;
export type Pool = mariadb.Pool;

export function createMariadbProvider(
  options: PoolConfig,
  poolName: string,
): Provider<mariadb.Pool> {
  return {
    provide: `Mariadb${poolName}`,
    useFactory: (): mariadb.Pool =>
      mariadb.createPool(options),
  };
}
