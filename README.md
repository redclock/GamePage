# GamePage
Generate a home page of game products from a JSON config

See the result [https://redclock.github.io/GamePage/index.html]

# Installation

```
npm i
```

# Build

```
npx tsc
```

# Generate Page
```
npm run start
```

# Config Game List

Modify the content of config.json

```
{
    "apps": [
        {
            "name": "Candy Crush Saga",
            "icon": "images/candy.webp",
            "description": "Balabalala",
            "appStoreLink": "https://example.com/sample-app-store-link"
        },
        ......
    ]
}
```
