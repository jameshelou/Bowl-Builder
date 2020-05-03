import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BowlBuilder from './containers/BowlBuilder/BowlBuilder';

class App extends Component {
  render() {
  return (
    <div>
    <Layout>
      <BowlBuilder/>
    </Layout>
    </div>
  );
  }
}

export default App;
