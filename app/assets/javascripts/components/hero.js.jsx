var Hero = React.createClass({
  getInitialState: function() {
    return({
      element: {},
      isLoaded: false
    })
  },

  render: function() {
    element = this.state.element

    var upvoteClasses = React.addons.classSet({
      "upvote": true,
      "is-upvoted": element.is_upvoted
    })

    var loaderClasses = React.addons.classSet({
      'loader loader-hero': true,
      'is-hidden': false
    })

    var votePath = element.is_upvoted ? element.unvote_path : element.upvote_path;
    return(
      <div onClick={this.stopPropagation}>
        <div className='hero-header'>
          <div className='hero-title'>
            {element.title}
          </div>
          <div className='hero-artist'>
            {element.artist ? element.artist.name : ''}
          </div>
          <div className='hero-action'>
            <a href={votePath} data-remote='true' onClick={this.handleVote}>
              <div className={upvoteClasses}>
                <svg width="25" version="1.1" id="Calque_1" x="0px" y="0px" viewBox="0 0 500 500" enable-background="new 0 0 500 500">
                  <polygon fill="#666666" points="267,453.5 267,45.5 403.4,363.6 403.6,364.3 "></polygon>
                  <polygon fill="#b2b2b2" points="267,45.5 267,453.5 265,452.6 64.5,375.1 "></polygon>
                </svg>
                <div className='upvote-count'>
                  {element.upvote_count}
                </div>

              </div>
            </a>
            <a className='button button-hero'>
              Suggest a track
            </a>
          </div>
        </div>
        <div className='hero-body'>
          <main>
          </main>
          <aside>
          </aside>
        </div>
      </div>
    )
  },

  componentDidMount: function () {
    var that = this
    PubSub.subscribe('openHero', function(msg, albumId) {
      $.get('/albums/' + albumId + '/get', function(data) {
        that.setState({
          element: data
        })
      })
    })

    PubSub.subscribe('closeHero', function(){
      that.setState({
        element: {}
      })
    })
  },

  stopPropagation: function(e) {
    console.log('yo')

    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }
})