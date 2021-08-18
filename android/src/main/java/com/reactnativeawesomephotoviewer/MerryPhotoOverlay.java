
package com.reactnativeawesomephotoviewer;

import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.util.AttributeSet;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import com.facebook.react.uimanager.ThemedReactContext;


import com.reactnativeawesomephotoviewer.R;
import com.stfalcon.imageviewer.StfalconImageViewer;

import com.squareup.picasso.Picasso;


/**
 * Created by bang on 26/07/2017.
 */

public class MerryPhotoOverlay extends RelativeLayout {
    private TextView tvTitle;
    private TextView tvTitlePager;

    private TextView tvDescription;
    private TextView tvShare;
    private ImageButton tvClose;
    private ImageView loadingImg;
    private StfalconImageViewer imageViewer;
    private String sharingText;
    private RelativeLayout statusBar;
    private ThemedReactContext mThemedReactContext;

    public void setImageViewer(StfalconImageViewer imageViewer){
        this.imageViewer = imageViewer;
    }
    public MerryPhotoOverlay(ThemedReactContext context) {
        super(context);
        mThemedReactContext = context;
        init();
    }

    public MerryPhotoOverlay(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public MerryPhotoOverlay(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    public void setHideShareButton(Boolean hideShareButton) {
        tvShare.setVisibility(hideShareButton ? View.GONE : View.VISIBLE);
    }
    public void setHideCloseButton(Boolean hideCloseButton) {
        tvClose.setVisibility(hideCloseButton ? View.GONE : View.VISIBLE);
    }

    public void setHideTitle(Boolean hideTitle) {
        tvTitlePager.setVisibility(hideTitle? View.GONE : View.VISIBLE);
    }

    public void setPagerText(String text) {
        tvTitlePager.setText(text);
    }

    public void setPagerTextColor(String color) {
        tvTitlePager.setTextColor(Color.parseColor(color));
    }

    public void setDescription(String description) {
        tvDescription.setText(description);
    }

    public void setDescriptionTextColor(int color) {
        tvDescription.setTextColor(color);
    }

    public void setShareText(String text) {
        tvShare.setText(text);
    }

    public void setShareContext(String text) {
        this.sharingText = text;
    }

    public void setShareTextColor(String color) {
        tvShare.setTextColor(Color.parseColor(color));
    }

    public void setTitleTextColor(int color) {
        tvTitle.setTextColor(color);
    }

    public void setTitleText(String text) {
        tvTitle.setText(text);
    }

    public void hiddenLoading() {
      loadingImg.setVisibility(View.GONE);
    }

    public int getStateBarHeight() {
      int height = 0;
      int id = mThemedReactContext.getApplicationContext().getResources().getIdentifier("status_bar_height", "dimen", "android");
      if (id > 0) {
        height = mThemedReactContext.getApplicationContext().getResources().getDimensionPixelSize(id);
      }
      return height;
    }

    private void sendShareIntent() {
        Intent sendIntent = new Intent();
        sendIntent.setAction(Intent.ACTION_SEND);
        sendIntent.putExtra(Intent.EXTRA_TEXT, sharingText);
        sendIntent.setType("text/plain");
        getContext().startActivity(sendIntent);
    }

    private void init() {
        View view = inflate(getContext(), R.layout.photo_viewer_overlay, this);
        tvTitlePager = (TextView) view.findViewById(R.id.tvTitlePager);
        tvTitle = (TextView) view.findViewById(R.id.tvTitle);
        tvDescription = (TextView) view.findViewById(R.id.tvDescription);
        loadingImg = (ImageView) view.findViewById(R.id.loadingImg);
        statusBar = (RelativeLayout) view.findViewById(R.id.barContainer);
        tvShare = (TextView) view.findViewById(R.id.btnShare);

        Picasso.get()
        .load(R.drawable.loading)
        .into(loadingImg);

        RelativeLayout.LayoutParams lp = (LayoutParams) statusBar.getLayoutParams();
        lp.topMargin = getStateBarHeight();
        statusBar.setLayoutParams(lp);
        tvShare.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                sendShareIntent();
            }
        });

        tvClose = (ImageButton) view.findViewById(R.id.btnClose);
        tvClose.setColorFilter(Color.parseColor("#FFFFFF"));
        tvClose.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
               imageViewer.dismiss();
            }
        });
    }
}
