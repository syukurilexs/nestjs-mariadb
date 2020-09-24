import { DynamicModule, Global, Module } from '@nestjs/common';
import { createMariadbProvider, PoolConfig } from './mariadb.provider';

@Global()
@Module({})
export class MariadbModule {
  static forRoot(
    options: PoolConfig,
    poolName: string = '',
  ): DynamicModule {
    const mariadbProvider = createMariadbProvider(options, poolName);

    return {
      module: MariadbModule,
      providers: [mariadbProvider],
      exports: [mariadbProvider],
    };
  }
}
