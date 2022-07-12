// React component
var GroceryList = () => (
  // render an array of grocery items using GrocerListItem component
  <GroceryListItem list={['Milk', 'Cereal']}/>
);
// create class to instantiate each item in list
class GroceryListThing extends React.Component {
  // constructor method, pass in props 
  constructor(props) {
    // use super keyward for inheritance purposes (like .call())
    super(props);
    this.state = {
      done: false
    }
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  // every class component must have a render method
  render() {
    // apply CSS styling via object literal
    var style = {
      // determines action based on state
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    // return HTML element including various functionality like onclick methods
    return (
      // this is a JSX way of formatting the HTML
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryListItem = (props) => (
  // use GroceryListThing to render each component
  // apply JSX formatting to each item in list array
  <ul>
    {props.list.map(item => 
     <GroceryListThing item={item} />     
      )}
  </ul>
);
// used to render component and append to selected element on the DOM
ReactDOM.render(<GroceryList />, document.getElementById('app'))
