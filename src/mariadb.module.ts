import { DynamicModule, Global, Module } from '@nestjs/common';
import {
  createMariadbProvider,
  createMariadbAsyncProvider,
} from './mariadb.provider';
import {
  MariadbModuleAsyncOption,
  PoolConfig,
} from './interfaces/mariadb-async-option';

@Global()
@Module({})
export class MariadbModule {
  static forRoot(options: PoolConfig, poolName: string = ''): DynamicModule {
    const mariadbProvider = createMariadbProvider(options, poolName);

    return {
      module: MariadbModule,
      providers: [mariadbProvider],
      exports: [mariadbProvider],
    };
  }

  static forRootAsync(options: MariadbModuleAsyncOption, poolName: string): DynamicModule {
    const mariadbProvider = createMariadbAsyncProvider(options, poolName);

    return {
      imports: options.imports || [],
      module: MariadbModule,
      providers: [...mariadbProvider],
      exports: [mariadbProvider[0]],
    };
  }
}
