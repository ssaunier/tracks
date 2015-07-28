var List = React.createClass({
  render: function(){
    return(
      <div>
        <div className='list-date'>
          <span className='list-date-big'>
            {this.props.date ? this.props.date.day : ""}
          </span>
          <span className='list-date-meta'>
            {this.props.date.meta}
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