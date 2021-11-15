package com.reactnativeawesomephotoview;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.module.annotations.ReactModule;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import android.view.View;

import cc.shinichi.library.ImagePreview;
import cc.shinichi.library.bean.ImageInfo;

@ReactModule(name = AwesomePhotoviewModule.NAME)
public class AwesomePhotoviewModule extends ReactContextBaseJavaModule {
    public static final String NAME = "AwesomePhotoview";

    public AwesomePhotoviewModule(ReactApplicationContext reactContext) {
        getCurrentActivity().getWindow().getDecorView().setSystemUiVisibility( View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY | View.SYSTEM_UI_FLAG_FULLSCREEN);
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }


    @ReactMethod
    public void open(ReadableMap config, Promise promise) {
      ReadableArray imgs = config.getArray("images");
      int index = config.getInt("initialIndex");
      ImageInfo imageInfo;
      final List<ImageInfo> imageInfoList = new ArrayList<>();
      for (int i = 0; i < imgs.size(); i++) {
        imageInfo = new ImageInfo();
        ReadableMap imgMap = imgs.getMap(i);
        // 原图地址
        imageInfo.setOriginUrl(imgMap.getString("url"));
        imageInfo.setThumbnailUrl(imgMap.getString("thumbnailUrl"));
        imageInfoList.add(imageInfo);
      }
      ImagePreview instance = ImagePreview.getInstance();
      instance.setContext(getCurrentActivity())
      .setIndex(index)
        .setImageInfoList(imageInfoList)
        .start();

      promise.resolve(true);
    }
}
