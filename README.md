# com.example.ytplayer

Powered by JQuery & [HTML5 Video & Youtube Background by Tean](https://0.s3.envato.com/files/129872589/index.html)

-

#### 使用說明

1.  至 [Google Dev](https://console.developers.google.com/apis/) 建立並設定YouTube API ，然後填入 yt_ytAppId 參數。

2. 將欲播放的 Youtube 清單填入 set_listid 參數。

3. Chrome 需裝上 [cast 擴展](https://chrome.google.com/webstore/detail/google-cast/boadgeojelhgndaghljhdicfkmllpafd/reviews?hl=en)才不會顯示錯誤

-

#### Preference 擴充 （config.xml）

|parameter                                 | type      |default|description           |
|-----------------------------------------|-----------|----------|-------------------------|
|yt_mediaId                                 |string    |             ||
|yt_componentFixedSize            |boolean|false    ||
|yt_defaultVolume                      |float      |1           |音量 0.0~1.0|
|yt_autoPlay                                |boolean|true      ||
|yt_randomPlay                           |boolean|false    ||
|yt_loopingOn                             |boolean|true      ||
|yt_defaultGallerySide                |string    |right     |播放清單的位置 bottom / right|
|yt_scrollType                              |string    |buttons||
|yt_autoOpenPlaylist                  |boolean|true      ||
|yt_closePlaylistOnVideoSelect |boolean|false    ||
|yt_onPlaylistEndGoToUrl          |boolean|false    ||
|yt_onPlaylistEndUrl                   |string    |            ||
|yt_onPlaylistEndTarget             |string    |            ||
|yt_useCookieDetection             |boolean|false    ||
|yt_useKeyboardNavigation      |boolean|false    ||
|yt_ytAppId                                  |string    |            |YouTube API|
|yt_useDeeplink                          |boolean|false    ||
|yt_startUrl                                  |string    |            ||
|yt_activePlaylist                         |string    |            ||
|display_controls                        |boolean|true     |是否顯示控制選項|
|display_fullscreen                     |boolean|true      |是否顯示全屏選項|
|display_volume                         |boolean|true      |是否顯示音量選項|
|display_seekbar                        |boolean|true      |是否顯示進度條|
|display_playlist                         |boolean|true      |是否顯示播放清單|
|display_playlistControls           |boolean|true      |是否顯示播放清單控制器|
|display_switch                           |boolean|true      |是否顯示播放清單轉換鈕|
|display_cover                            |boolean|false     |是否使影片範圍不回應點擊事件|
|set_listid                                    |string    |             |YouTube 播放清單 ID|
|set_global_css                           |string    |             |設置 css|
