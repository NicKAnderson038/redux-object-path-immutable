import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../actions/actionCreators";
import Main from "./main";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
