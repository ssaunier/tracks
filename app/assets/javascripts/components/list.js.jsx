var List = React.createClass({
  render: function(){
    return(
      <div>
        <div className='list-date'>
          <span className='list-date-big'>
          </span>
          <span className='list-date-meta'>
          </span>

          {this.props.albums.map(function(p){
            return <AlbumItem key={p.id} {...p} />
          })}
        </div>
      </div>
    )
  }
})