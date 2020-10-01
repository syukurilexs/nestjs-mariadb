import * as mariadb from 'mariadb';
import { Provider } from '@nestjs/common';
import { MariadbModuleAsyncOption, Pool, PoolConfig } from './interfaces/mariadb-async-option';

export function createMariadbProvider(
  options: PoolConfig,
  poolName: string,
): Provider<Pool> {
  return {
    provide: `Mariadb${poolName}`,
    useFactory: (): Pool => mariadb.createPool(options),
  };
}

export function createMariadbAsyncProvider(
  options: MariadbModuleAsyncOption,
  poolName: string,
): Provider[] {
  return [
    {
      provide: `Mariadb${poolName}`,
      useFactory: (x: PoolConfig): mariadb.Pool => mariadb.createPool(x),
      inject: ['MARIADB_MODULE_OPTIONS'],
    },
    {
      provide: 'MARIADB_MODULE_OPTIONS',
      useFactory: options.useFactory,
      inject: options.inject || [],
    },
  ];
}
