import React from 'react';
import { connect } from 'react-redux';
import { plus, minus } from '../actions/Counter';
import Counter from '../components/Counter';

const Home = props =>
  <div>
    <h1>Home</h1>
    <Counter count={props.count} plus={props.plus} minus={props.minus} />
  </div>;

const mapStateToProps = state => ({
  count: state.Counter.count
});

export default connect(
  mapStateToProps,
  { plus, minus }
)(Home);
