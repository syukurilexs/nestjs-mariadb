import { ModuleMetadata } from '@nestjs/common/interfaces';
import * as mariadb from 'mariadb';

export type PoolConfig = mariadb.PoolConfig;
export type Pool = mariadb.Pool;

export interface MariadbModuleAsyncOption
  extends Pick<ModuleMetadata, 'imports'> {
  useFactory?: (...args: any[]) => Promise<PoolConfig> | PoolConfig;
  inject: any[];
}
