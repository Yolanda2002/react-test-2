const baseUrl = "http://localhost:8080";

export const fetchLogin = (username, password) => {
  return fetch(baseUrl + "/api/users", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({ username: username, password: password }),
  }).then((res) => res.json());
};
export const signup = (username, password) => {
  return fetch(baseUrl + "/api/users?action=register", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  }).then((res) => res.json());
};

// export const getMovies = () => {
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };
export const getMovies = () => {
  return fetch(baseUrl + "/api/movies", {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getMovie = (args) => {
    // console.log(args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
  return fetch(baseUrl + "/api/movies/"+id, {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getFavoriteMovie = (username) => {
  console.log(username, 'username')
return fetch(baseUrl + "/api/favorites?username="+username, {
  headers: {
    "Content-Type": "application/json",
    Authorization: window.localStorage.getItem("token"),
  },
  method: "get",
})
  .then((res) => {
    return res.json();
  })
  .catch((error) => {
    console.log(error);
  });
};
export const putFavoriteMovie = (username,newFavorites) => {
  console.log(username, 'username')
return fetch(baseUrl + "/api/favorites/"+username, {
  headers: {
    "Content-Type": "application/json",
    Authorization: window.localStorage.getItem("token"),
  },
  method: "put",
  body: JSON.stringify({favorite:newFavorites})
})
  .then((res) => {
    return res.json();
  })
  .catch((error) => {
    console.log(error);
  });
};

// export const getGenres = () => {
//   return fetch(baseUrl + "/api/movies/tmdb/genres", {
//     headers: {
//       Authorization: window.localStorage.getItem("token")
//     }
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
export const getGenres = async () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};
// export const getUpcoming = () => {
//   return fetch(baseUrl + "/api/movies/tmdb/upcoming", {
//     headers: {
//       Authorization: window.localStorage.getItem("token")
//     }
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
export const getUpcoming = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getPeople = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch people");
  }
  return response.json();
};
// export const getPeople = () => {
//   return fetch(baseUrl + "/api/people", {
//     headers: {
//       Authorization: window.localStorage.getItem("token")
//     }
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export const getTopRatedMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

export const getTVShows = async () => {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch tv shows");
  }
  return await response.json();
};
