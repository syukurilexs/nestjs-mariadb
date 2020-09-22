import { MariadbModuleOption } from './interfaces/mariadb-option';
import { CONFIG_OPTIONS } from './constants';
import { Inject, Injectable } from '@nestjs/common';
import * as mariadb from 'mariadb';

@Injectable()
export class PoolService {
  pool: mariadb.Pool;

  constructor(@Inject(CONFIG_OPTIONS) options: MariadbModuleOption) {
    this.pool = mariadb.createPool({
      host: options.host,
      user: options.user,
      password: options.password,
      connectionLimit: options.connectionLimit,
      port: options.port,
      connectTimeout: options.connectTimeout,
    });
  }

  getConnection() {
    return this.pool.getConnection();
  }

  query(sql: string | mariadb.QueryOptions, value?: any) {
    return this.pool.query(sql,value);
  }

  activeConnections() {
    return this.pool.activeConnections();
  }

  totalConnections() {
    return this.pool.totalConnections();
  }

  idleConnections() {
    return this.pool.idleConnections();
  }

  taskQueueSize() {
    return this.pool.taskQueueSize();
  }
}
