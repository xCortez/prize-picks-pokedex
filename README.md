# PrizePicks Pokedex

# Technologies used in this project:
* [React](https://react.dev/)
* [Typescript](https://www.typescriptlang.org/)
* [Styled-components](https://github.com/styled-components/styled-components)
* [Axios](https://github.com/axios/axios)
* [Redux-Toolkit](https://redux-toolkit.js.org)
* [Date-fns](https://date-fns.org/)

# Setup

1. Clone this repository `git clone https://github.com/xCortez/prize-picks-pokedex.git`
2. Install the dependencies of the project: `npm i`
3. Spin up the app `npm start`
4. visit `http://localhost:3000`

# Description

Pokemon searching can occur on the Home page, pokemon search history can be seen on the history page, and pokemon details
can be seen by clicking on either of the pokemon cards (search result card vs history card)

### Home Page -> `/`
The application is built to search on the home page `/`. The input box has a debouncer set to `1 second` to prevent
the user from making too many queries per each keypress. It looks for individual Pokemon and renders a Pokemon card
in the case that a correct Pokemon name is provided `(example: squirtle, charmander, dragonite)`

The Pokemon Cards display some extra metadata of the Pokemon alongside a sprite to ID them.

The card that comes up as a result of the search will is clickable and will direct you to details page of that pokemon

### History Page -> `/history`
I use Redux-toolkit to make use of redux to keep track of the users Pokemon search histories
but without all the crazy configuration that redux takes.
On this page you will see histories of previously queried pokemon. You'll be able to see their name / id / searched data / image. The compact cards are also clickable
and will lead you to the details page of that Pokemon

There is als a clear button in case you'd like to clear the history that has been gathered so far.

### Pokemon Details Page -> `/pokemon/:id`
There is also the pokemon details page that displays content specific to the Pokemon that was selected on it's own page.
you can visit the previous evolutions of the pokemon from this page as it includes a bit more information about the species

#### Important
This page used the same search mechanism as the `/` (Home) page and thus anytime you go to a details page, it will include it
in your history as a searched pokemon. This may make it look like duplicate entries on the history page `/history`, but in reality it would be 1 entry for the initial
search on the home page, and a second entry for when you click through to the details page and it searches again.

## Notes
* Currently this is using localStorage to store history instead of a DB, I would have loved to hooked it up to a DB to keep track of user history.

* The pokemon details pages only include `evolves_from` relationships, so you can visit previous evolutions from the details page
but not the `evolvess_to` relationship

* Also noticed some deprecation warnings, ideally I would go and fix these warnings to ensure the projcect is in the best shape possible, but I was running out of time
  So instead I'm leaving this note here stating that I would infact like to fix those warnings

* Thoughts on making this work on concurrent envs: To make this work in a concurrent environment we would have to store the data in a DB rather than in localStorage to better operate on the data,
and also have to ensure locking mechanisms to prevent race conditions while writing into the DB.
With the consideration of locking mechanisms we should also consider concurrency models that represent
message-passing systems so we can queue up requests rather then have all the requests hit the server and have the server figure out with to with with them.