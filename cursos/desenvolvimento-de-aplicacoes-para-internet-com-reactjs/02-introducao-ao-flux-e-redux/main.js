import { connect } from "./node_modules/react-redux";

class Counter extends React.Component {
  state = {
    count: 0
  };
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
  };
  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
  };

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Counter"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
      onClick: this.decrement
    }, "-"), /*#__PURE__*/React.createElement("span", null, this.props.count), /*#__PURE__*/React.createElement("button", {
      onClick: this.increment
    }, "+")));
  }

}

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

const reduxState = connect(mapStateToProps)(Counter);
const redux = document.querySelector('[data-js="redux"]');
ReactDOM.render(reduxState, redux);
