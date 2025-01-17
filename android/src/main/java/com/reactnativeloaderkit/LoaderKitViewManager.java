package com.reactnativeloaderkit;

import android.graphics.Color;
import android.view.View;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.wang.avi.AVLoadingIndicatorView;

public class LoaderKitViewManager extends SimpleViewManager<AVLoadingIndicatorView> {
  public static final String REACT_CLASS = "LoaderKitView";

  @Override
  @NonNull
  public String getName() {
    return REACT_CLASS;
  }

  @Override
  public AVLoadingIndicatorView createViewInstance(ThemedReactContext context) {
    AVLoadingIndicatorView avi = new AVLoadingIndicatorView(context, null, R.style.AVLoadingIndicatorView);
    return avi;
  }

  @ReactProp(name = "name")
  public void setName(AVLoadingIndicatorView view, String name) {
    view.setIndicator(name + "Indicator");
  }

  @ReactProp(name = "color")
  public void setColor(AVLoadingIndicatorView view, int color) {
    view.setIndicatorColor(color);
  }
}
