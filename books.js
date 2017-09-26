{
  "Harry Potter": {
    author: "J K Rowling",
    published: "26 June 1997"
  },
  "James Bond": {
    author: "Ian Fleming",
    published: "28 Feb 1950"
  },
  "Pond": {
    author: "Fish pie",
    published: "21 april 2017"
  }
}

function getBookAuthor(name) {
  return books[name].author;
}

function getDatePublished(name) {
  // books is were you went to get it from [name] is the object and published is the part we want
  return books[name].published;
}

module.exports = {
  getBookAuthor: getBookAuthor,
  getDatePublished: getDatePublished
}
