function getAlbumFormats(album: Album, ...formats: string[]) {
  return `${album.title} is available in the following formats: ${formats.join(
    ", "
  )}`;
}

getAlbumFormats(
  { title: "The Dark Side of the Moon", artist: "Pink Floyd", year: 1973 },
  "CD",
  "Vinyl",
  "Digital"
);