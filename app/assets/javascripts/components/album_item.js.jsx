var AlbumItem = React.createClass({

  getInitialState: function(){
    return({
      upvoted: this.props.upvoted,
      upvoteCount: this.props.upvote
    })
  },

  render: function(){
    var upvoteClasses = React.addons.classSet({
      "upvote": true,
      "is-upvoted": this.state.upvoted
    })

    return (
      <div className='element' onClick={this.handleClick}>
        <a onClick={this.handleVote}>
          <div className={upvoteClasses}>

            <div className='upvote-count'>
              {this.state.upvoteCount}
            </div>

          </div>
        </a>
        <div className='element-thumbnail'>
        </div>
        <div className='element-info'>
          <div className='element-title'>
            {this.props.title}
          </div>
          <div className='element-description'>
            {this.props.artist.name}
          </div>
        </div>
        <div className='element-meta'>
          <div>
            <img src={this.props.user.avatar_url} />
          </div>
        </div>
        <div className='clear' />
      </div>
    )
  },

  handleVote: function(e) {

  }
})