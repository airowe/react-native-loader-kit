import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
  processColor,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import animations from './animations';

const LINKING_ERROR =
  `The package 'react-native-loader-kit' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

type BaseProps = {
  name?: string;
  size?: number;
  style: ViewStyle;
};

type LoaderKitProps = {
  color?: string;
} & BaseProps;

type LoaderKitNativeProps = {
  color?: number;
} & BaseProps;

const ComponentName = 'LoaderKitView';
const LoaderKitNative =
  requireNativeComponent<LoaderKitNativeProps>(ComponentName);

const LoaderKit = (props: LoaderKitProps) => {
  return <LoaderKitNative {...props} color={processColor(props.color)} />;
};

LoaderKit.propTypes = {
  name: PropTypes.oneOf(animations),
  color: PropTypes.string,
  size: Platform.OS === 'ios' ? PropTypes.number.isRequired : PropTypes.number,
};

export default UIManager.getViewManagerConfig(ComponentName) != null
  ? LoaderKit
  : () => {
      throw new Error(LINKING_ERROR);
    };
