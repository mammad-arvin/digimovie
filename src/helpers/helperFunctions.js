// minimize name of profile of username
const miniName = (name) => {
    if (name.length >= 6) {
        const newName = name.split("").splice(0, 5);
        return newName.join("") + "...";
    } else {
        return name;
    }
};

//  join genres for show together
const joinGenre = (manyRefrence) => {
    const Genres = manyRefrence.filter(
        (refrence) => refrence.__typename === "Genres" && refrence.genre
    );
    const Genre = Genres.map((gen) => gen.genre);
    return Genre.join(" , ");
};

//  join director for show together
const joinDirector = (manyRefrence) => {
    const directors = manyRefrence.filter(
        (refrence) => refrence.__typename === "Director" && refrence.director
    );
    const director = directors.map((item) => item.director);
    return director.join(" , ");
};

//  join Stars for show together
const joinStars = (manyRefrence) => {
    const stars = manyRefrence.filter(
        (refrence) =>
            refrence.__typename === "BestWomenActors" ||
            (refrence.__typename === "BestMenActors" && refrence.name)
    );
    const star = stars.map((item) => item.name);
    return star.join(" , ");
};

//  join countries for show together
const joinCountries = (manyRefrence) => {
    const countries = manyRefrence.filter(
        (refrence) => refrence.__typename === "Country" && refrence.country
    );
    const country = countries.map((item) => item.country);
    return country.join(" , ");
};

// change title of any page to special title that page
const titleChanger = (title) => {
    document.title = title;
};

export {
    miniName,
    titleChanger,
    joinGenre,
    joinDirector,
    joinStars,
    joinCountries,
};
