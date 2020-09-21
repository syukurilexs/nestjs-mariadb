<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS Custom Config Package (simple config service)</h3>

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

  show() {
    return this.pool.query('select * from mydb.mytable');
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