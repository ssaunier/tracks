var FeaturedFeed = React.createClass ({
  render: function() {
    var lists = this.props.lists;
    return(
      <div>
        {lists.map(function(p) {
          return <List key={p.id} {...p} />
        })}
      </div>
   )
  }
});