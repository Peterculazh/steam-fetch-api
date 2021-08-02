<h1 align="center">Welcome to Steam Fetch API 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Getting data from known Steam API.

## Install

```sh
npm install steam-fetch-api
```

## Run tests

```sh
npm run test
```

## Usage example

```js
import { SteamFetchAPI } from 'steam-fetch-api';

const steam = new SteamFetchAPI;

const getAllGames = async () => {
  const games = await steam.getAllGames();
}
```

### Remarks

- This package I created mostly for me. But I'm looking forward to continue develop it and improve both code and documentation;
- Steam API is not documented officially, so there poor list of endpoints that collected community. Feel free share to share it with me by creating issue;

## Author

👤 **Peter Kulazhenko**

* Github: [@peterculazh](https://github.com/peterculazh)
* LinkedIn: [@peterculazh](https://linkedin.com/in/peterculazh)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
