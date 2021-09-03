<h1 align="center">Welcome to Steam Fetch API 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.19-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Getting data from known Steam API.

# Install

```sh
npm install steam-fetch-api
```

## Usage example

```js
import SteamFetchAPI from 'steam-fetch-api';

const steam = new SteamFetchAPI;

const getAllGames = async () => {
  const games = await steam.getAllGames();
}
```

## Available API

- ##### Get all games without data

```js
steam.getAllGames()
```


- ##### Get game by strict name

```js
steam.getStrictByName(name: string)
```

- ##### Get list of games by name (comparing on whole game's name)

```js
steam.getListByName(name: string)
```

- ##### Get list of games by name (comparing on start game's name)

```js
steam.getListByStartName(name: string)
```

- ##### Get game with details (data from Steam Big Picture API)

```js
steam.getGameDetails(appid: number)
```

- #### Get game news. 
<strong>Max length limit not includes html tags.</strong>

```js
steam.getGameDetails(appid: number, [newsCount: number, maxLength: number])
```

### Remarks

- This package I created mostly for me. But I'm looking forward to continue develop it and improve both code and documentation;
- Steam API is not documented officially, so there poor list of endpoints that collected community. Feel free share to share it with me by creating issue;
- Currently I didn't faced request limits to Steam;



## Author

👤 **Peter Kulazhenko**

* Github: [@peterculazh](https://github.com/peterculazh)
* LinkedIn: [@peterculazh](https://linkedin.com/in/peterculazh)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
