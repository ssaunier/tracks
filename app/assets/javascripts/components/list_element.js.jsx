var ListElement = React.createClass({

  getInitialState: function(){
    return({
      upvoted: this.props.element.upvoted,
      upvoteCount: this.props.element.upvote
    })
  },

  render: function(){
    var element = this.props.element
    var album = this.props.element.album;
    var user = this.props.element.user;
    var upvoteClasses = React.addons.classSet({
      "upvote": true,
      "is-upvoted": this.state.upvoted
    })

    var votePath = this.state.upvoted ? element.unvotePath : element.upvotePath;

    return (
      <div className='element' onClick={this.handleClick}>
        <a href={votePath} data-remote='true' onClick={this.handleVote}>
          <div className={upvoteClasses}>
            <svg width="25" version="1.1" id="Calque_1" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500">
              <polygon fill="#666666" points="267,453.5 267,45.5 403.4,363.6 403.6,364.3 "></polygon>
              <polygon fill="#b2b2b2" points="267,45.5 267,453.5 265,452.6 64.5,375.1 "></polygon>
            </svg>
            <div className='upvote-count'>
              {this.state.upvoteCount}
            </div>

          </div>
        </a>
        <div className='element-thumbnail'>
        </div>
        <div className='element-info'>
          <div className='element-title'>
            {album.title}
          </div>
          <div className='element-description'>
            {album.tagline}
          </div>
        </div>
        <div className='element-meta'>
          <div>
            <img src={user.avatar_url} />
          </div>
        </div>
        <div className='clear' />
      </div>
    )
  },

  handleClick: function() {
    PubSub.publish('openHero', this.props.element.album.id)
  },

  handleVote: function(e) {
    var state = this.state.upvoted
    var upvoteCount = this.state.upvoteCount
    this.setState({
      upvoted: !state,
      upvoteCount: state ? upvoteCount - 1 : upvoteCount + 1
    })

    e.stopPropagation()
    e.stopImmediatePropagation()
  }
})