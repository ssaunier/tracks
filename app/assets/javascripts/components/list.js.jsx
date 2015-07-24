var List = React.createClass({
  render: function(){
    return(
      <div>
        <div className='list-date'>
          <span className='list-date-big'>
            TODAY
          </span>
          <span className='list-date-meta'>
            15th July
          </span>
        </div>
        {this.props.elements.map(function(element){
          return(
            <ListElement element={element} />
          )
        })}
      </div>
    )
  }
})