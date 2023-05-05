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
    const Genres = manyRefrence.filter((refrence) =>
        refrence.__typename==="Genres" && refrence.genre
    );
    const Genre = Genres.map((gen) => gen.genre )
    return Genre.join(" , ");
};


// change title of any page to special title that page
const titleChanger = (title) => {
    document.title = title;
};

export { miniName, titleChanger, joinGenre };
