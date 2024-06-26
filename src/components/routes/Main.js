import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CameraHandler from '../cameraHandler';
import ProductDisplay from '../productDisplay';
import ProductNotFound from '../productNotFound';
import { HistoryDisplay } from '../history';
import SearchFood from '../search/searchFood';

const Main = () => (
  <main className="main__wrapper " style={{maxWidth:"680px"}}>
    <Switch>
      <Route exact path='/' component={CameraHandler}/>
      <Route exact path='/product/not-found' component={ProductNotFound} />
      <Route exact path='/product/:id' component={ProductDisplay}/>
      <Route exact path='/history' component={HistoryDisplay} />
      <Route path='/search' component={SearchFood} />
    </Switch>
  </main>
);

export default Main;
