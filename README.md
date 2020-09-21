<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS MariaDb (using official <b>mariadb</b> module)</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

### Installation

```bash
npm install @syukurilexs/nestjs-mariadb
```

## Usage

Import `MariadbModule`:

```typescript
@Module({
  imports: [
    MariadbModule.forRoot({
      host: 'localhost',
      user: 'root',
      password: 'yourpassowrd',
      connectionLimit: 5
    })
  ],
  providers: [...],
})
export class AppModule {}
```

Inject `PoolService`:

```typescript
@Injectable()
export class YourService {
  constructor(private readonly pool: PoolService) {}

  method1() {
    // For single query just use this method, it will auto release
    // after use
    return this.pool.query('select * from mydb.mytable');
  }

  method2() {
    // Create connection
    const conn = await this.pool.getConnection();

    // Use created connection
    const rows = await conn.query('select * from syukur.mytable');

    // Re-use existing connection
    const rows2 = await conn.query('select * from syukur.mytable');

    // Release connection to pool after use
    conn.release();

    return [rows,rows2];
  }
}
```
This module is ***Gloabl Module***
## Change Log

See [Changelog](CHANGELOG.md) for more information.

## Contributing

Contributions welcome! See [Contributing](CONTRIBUTING.md).

## Author

**Syukur Kassim (Syukurilexs on [Linkedin](https://www.linkedin.com/in/syukurilexs))**

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.