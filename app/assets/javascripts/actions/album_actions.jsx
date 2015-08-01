class AlbumActionsClass {
  upvote(id) {
    $.post(
      Routes.upvote_album_path(id),
      (data) => that.dispatch(data)
    );
  }
}

var AlbumActions = alt.createActions(AlbumActionsClass);
