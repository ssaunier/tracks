class AlbumActionsClass {
  upvote(id) {
    var that = this

    $.post(
      Routes.upvote_album_path(id),
      function(data) {
        that.dispatch(data)
      }
    )
  }
}

AlbumActions = alt.createActions(AlbumActionsClass)