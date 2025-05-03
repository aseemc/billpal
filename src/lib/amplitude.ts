import * as amplitude from '@amplitude/analytics-browser';

export const initAmplitude = () => {
  amplitude.init('08b1e6f24ba1e7aacf351079b6232eae');
};

export const trackEvent = (event: string, properties?: object) => {
  amplitude.track(event, properties);
}; 