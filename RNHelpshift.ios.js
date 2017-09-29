/**
 * @providesModule react-native-helpshift
 * @flow
 */
import ReactNative from 'react-native';
import invariant from 'fbjs/lib/invariant';

const { NativeModules } = ReactNative;
const RNHelpshift = NativeModules.RNHelpshift;

import type {
  FAQOptions,
} from './RNHelpshiftTypes';

export function showFAQs(params: FAQOptions = {}): void {
  RNHelpshift.showFAQs(params);
}
/*
export function tagEvent(eventName: string, attributes?: Object): void {
  invariant(typeof eventName === 'string' && eventName.trim(), 'Event Name has to be specified');
  VOOLocalytics.tagEvent({ eventName, attributes });
}

export function setLocation(coords: Coordinates): void {
  invariant(
    coords && coords.hasOwnProperty('lng') && coords.hasOwnProperty('lat'),
    'Coordinates has to contain lng and lat'
  );
  VOOLocalytics.setLocation(coords);
}
*/
