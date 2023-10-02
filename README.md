# News Api

This is the Basic project that uses gnews api to get the latest news articles and provide feature to search news too.

## Features

- ### Api endpoint to get latest Headlines [ /news ]

  Params(optional)

  1. **lang** : defualt is English other can be found [here](https://gnews.io/docs/v4?javascript#languages)
  2. **category** : defualt general options are general, world, nation, business, technology, entertainment, sports, science and health.
  3. **country** : defualt is India others can be found [here](https://gnews.io/docs/v4?javascript#countries)
  4. **max** ; it is number of results defualt is 20 can be set upto 100

- ### Api endpoint to search News Headlines [ /search ]

  1. **lang** : defualt is English other can be found [here](https://gnews.io/docs/v4?javascript#languages)
  2. **category** : defualt general options are general, world, nation, business, technology, entertainment, sports, science and health.
  3. **country** : defualt is India others can be found [here](https://gnews.io/docs/v4?javascript#countries)
  4. **max** ; it is number of results defualt is 20 can be set upto 100
  5. **keyword** : keyword to search a particular news details
  6. **sortBy** : keyword to sort the results can be publishedAt | relevance
  7. **from** : used to set from date from which the results are to be shown YYYY-MM-DD format
  8. **to** : used to set till date for which the results are to be shown YYYY-MM-DD format

## Authors

- [@krishnadude98](https://www.github.com/krishnadude98)

## Installation

Install packages

Yarn

```bash
  yarn install
```

Npm

```bash
    npm install
```

## Environment Variables

To run this project, you want to add the following environment variables to your .env file

`API_KEY`="GNEWS_API_KEY"

## Run Locally

To run The API Locally

Yarn

```bash
  yarn run start
```

Npm

```bash
  npm run start
```
