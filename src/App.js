import React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import { getEmail, getName } from './reducers/data';
import { setEmail, setName } from './actions/data';

function App(props) {
  const {
    email, name, setEmail, setName,
  } = props;

  return (
    <div>
      <p onClick={() => setEmail(`${email}p`)}>
        email:
        {email}
      </p>
      <p onClick={() => setName(`${name}n`)}>
        name:
        {name}
      </p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch(setName(name)),
  setEmail: (email) => dispatch(setEmail(email)),
});

const mapStateToProps = (state) => ({
  email: getEmail(state),
  name: getName(state),
});

App.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
