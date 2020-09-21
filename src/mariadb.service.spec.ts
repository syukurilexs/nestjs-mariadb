import { Test, TestingModule } from '@nestjs/testing';
import { PoolService } from './mariadb.service';

describe('MariadbService', () => {
  let service: PoolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoolService],
    }).compile();

    service = module.get<PoolService>(PoolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
