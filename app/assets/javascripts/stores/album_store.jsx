class AlbumStoreClass {
  constructor() {
    this.albums = {};
    this.bindListeners({
      updateAlbum: AlbumActions.upvote
    });
  }

  updateAlbum(album) {
    this.albums[album.id] = album;
  }

  getAlbum(id) {
    return this.albums[id];
  }
}

var AlbumStore = alt.createStore(AlbumStoreClass, 'AlbumStore');
