import {types} from 'mobx-state-tree';

import createFetchData from './Fetch';

export const Track = types.model({
  id: types.maybe(types.identifier), 
  name: types.maybe(types.string),
  artist: types.maybe(types.string),
  albumImage: types.maybe(types.string)
}); 

const TrackStoreModel = types.model({
  tracks: types.maybe(types.array(Track))
}); 

const TrackStore = types.compose(TrackStoreModel, createFetchData('tracks'));


export default TrackStore;