const { UserList, MovieList } = require("../fakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    // USER RESOLVERS
    users: () => {
      return UserList;
    },

    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },

    // MOVIE RESOLVERS
    movies: () => {
      return MovieList;
    },

    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MovieList, { name });
      return movie;
    },
  },

  User: {
    favoriteMovie: () => {
      return _.filter(MovieList, (movie) => {
        const favMovie =
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010;
        return favMovie;
      });
    },
  },
};

module.exports = { resolvers };
