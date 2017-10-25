var GroceryList = ({ items }) => (
    <ul>
      {items.map(item => 
        <GroceryListItem item={item} key={item} />
      )}
    </ul>
  );

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
  }
  onListItemHover(event) {
    this.setState({
      hovered: !this.state.hovered
    })
  }
  render() {
    var style = { 
      fontWeight: this.state.hovered ? '800' : '400'
    };
    return (
      <li style={style}>
        <span onMouseOver={this.onListItemHover.bind(this)}
          onMouseOut={this.onListItemHover.bind(this)}>
          {this.props.item}
        </span>
      </li>
    )
  }
} 

ReactDOM.render(<GroceryList items={['Beer', 'Rum', 'Potatoes']}/>, document.getElementById("app"));
