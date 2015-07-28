json.title @album.title
json.upvote_count @album.cached_votes_up
json.is_upvoted user_signed_in? ? current_user.voted_for?(@album) : false
json.upvote_path upvote_album_path(@album)
json.unvote_path unvote_album_path(@album)