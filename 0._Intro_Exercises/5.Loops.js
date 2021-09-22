const favoriteThings = ["Cleo", "AUBERGINE", 420, true, "\u2606"]

const newArray = []
//favoriteThing.forEach(thing => {
//    newArray.push(`Ooh, I like ${thing}`)
//})

console.log(favoriteThings)

const subjectiveFavoriteThings = favoriteThings.map(thing => `Ooh I like ${thing}`)

console.log(subjectiveFavoriteThings)

const newnewarray = favoriteThings.filter(thing => thing.length > 3)

const reducedArray = favoriteThings.reduce(x => x)

console.log(reducedArray)