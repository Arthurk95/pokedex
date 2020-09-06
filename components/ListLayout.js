export default class ListLayout extends React.Component {
  constructor({ children }) {
    super();
    this.ListItems = children;
  }

  render() {
    return <div className="flex-list">{this.ListItems}</div>;
  }
}
