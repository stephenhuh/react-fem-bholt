var div = React.DOM.div
var h1 = React.DOM.h1

//create a new type of component
var MyTitle = React.createClass({
  //every component MUST have a render method -- pure function -- returns a component
  render: function() {
    div(null,
       h1(null, 'check out this copmonent')
       )
  }
})

//Creating a blueprint for a new type of component React.createClass vs React.createElemeent (one instance)
//Components can be composed of compoenents and more components
var myFirstComponent = React.createClass({
  render: function() {
    return (
      div(null,
          React.createElement(MyTitle),
          React.createElement(MyTitle),
          React.createElement(MyTitle)
        )
    )
  }
})

ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))
