# PrizePicks Pokedex

# Technologies used in this project:
* [React](https://react.dev/)
* [Typescript](https://www.typescriptlang.org/)
* [Styled-components](https://github.com/styled-components/styled-components)
* [Axios](https://github.com/axios/axios)

# Setup

1.- Clone this repository `git clone git@github.com:xCortez/prize-picks-pokedex.git`

2.- Install the dependencies of the project: `npm i`

3.- Spin up the app `npm start`

# Description
The application is built to search on the home page `/`. The input box has a debouncer set to `1 second` to prevent
the user from making too many queries per each keypress. It looks for individual Pokemon and renders a Pokemon card
in the case that a correct Pokemon name is provided `(example: squirtle, charmander, dragonite)`

The Pokemon Cards display some extra metadata of the Pokemon alongside a sprite to ID them.