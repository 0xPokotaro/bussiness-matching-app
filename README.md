<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Commands

```bash
# セットアップ
$ cp .env.example .env
$ composer install

# Bashエイリアスの設定
alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'

# コンテナを起動
$ sail up -d

# コンテナを停止
$ sail stop

# パスワードグラントクライアントの作成
$ sail artisan passport:client --password
```

```bash
# マイグレーションコマンド
$ sail artisan migrate --seed

# ルートリスト
$ sail artisan route:list
```
## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
