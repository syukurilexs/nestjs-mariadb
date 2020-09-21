import { DynamicModule, Module } from '@nestjs/common';
import { CONFIG_OPTIONS } from './constants';
import { MariadbModuleOption } from './interfaces/mariadb-option';
import { PoolService } from './mariadb.service';

@Module({})
export class MariadbModule {
  static forRoot(options: MariadbModuleOption): DynamicModule {
    return {
      module: MariadbModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        PoolService,
      ],
      exports: [PoolService]
    };
  }
}
