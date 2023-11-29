import {
  APP_DATA,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogRow,
  Dropdown,
  EMOJI_REACTION_TYPE,
  Flex,
  IconButton,
  IconButton_default,
  Loading,
  Slider,
  Text,
  ToastManager,
  Tooltip,
  __async,
  __objRest,
  __spreadValues,
  config,
  styled,
  useTheme
} from "./chunk-N5HPVHTK.js";

// src/Prebuilt/layouts/HLSView.jsx
import React10, { useCallback, useEffect as useEffect3, useRef as useRef2, useState as useState4 } from "react";
import { useFullscreen, useMedia, usePrevious, useToggle } from "react-use";
import { HLSPlaybackState, HMSHLSPlayer, HMSHLSPlayerEvents as HMSHLSPlayerEvents2 } from "@100mslive/hls-player";
import screenfull from "screenfull";
import { selectAppData, selectHLSState, useHMSActions, useHMSStore } from "@100mslive/react-sdk";
import { ColoredHandIcon, ExpandIcon, PlayIcon as PlayIcon2, RadioIcon, ShrinkIcon } from "@100mslive/react-icons";

// src/Prebuilt/components/HlsStatsOverlay.jsx
import React, { memo } from "react";
import { CloseIcon } from "@100mslive/react-icons";
function HlsStatsOverlay({ hlsStatsState, onClose }) {
  var _a, _b, _c;
  return /* @__PURE__ */ React.createElement(
    Flex,
    {
      css: {
        position: "absolute",
        width: "$80",
        marginLeft: "$8",
        padding: "$8 $8 $10",
        zIndex: 10,
        backgroundColor: "$surface_brighter",
        borderRadius: "$1"
      },
      direction: "column"
    },
    /* @__PURE__ */ React.createElement(IconButton_default, { css: { position: "absolute", top: "$2", right: "$2" }, onClick: onClose }, /* @__PURE__ */ React.createElement(CloseIcon, null)),
    /* @__PURE__ */ React.createElement(HlsStatsRow, { label: "URL" }, /* @__PURE__ */ React.createElement(Flex, { align: "center" }, /* @__PURE__ */ React.createElement(
      "a",
      {
        style: { cursor: "pointer", textDecoration: "underline" },
        href: hlsStatsState == null ? void 0 : hlsStatsState.url,
        target: "_blank",
        rel: "noreferrer"
      },
      "Stream url"
    ))),
    /* @__PURE__ */ React.createElement(HlsStatsRow, { label: "Video size" }, ` ${(_a = hlsStatsState == null ? void 0 : hlsStatsState.videoSize) == null ? void 0 : _a.width}x${(_b = hlsStatsState == null ? void 0 : hlsStatsState.videoSize) == null ? void 0 : _b.height}`),
    /* @__PURE__ */ React.createElement(HlsStatsRow, { label: "Buffer duration" }, (_c = hlsStatsState == null ? void 0 : hlsStatsState.bufferedDuration) == null ? void 0 : _c.toFixed(2), " "),
    /* @__PURE__ */ React.createElement(HlsStatsRow, { label: "Connection speed" }, `${((hlsStatsState == null ? void 0 : hlsStatsState.bandwidthEstimate) / (1e3 * 1e3)).toFixed(2)} Mbps`),
    /* @__PURE__ */ React.createElement(HlsStatsRow, { label: "Bitrate" }, `${((hlsStatsState == null ? void 0 : hlsStatsState.bitrate) / (1e3 * 1e3)).toFixed(2)} Mbps`),
    /* @__PURE__ */ React.createElement(HlsStatsRow, { label: "distance from live" }, getDurationFromSeconds(hlsStatsState.distanceFromLive / 1e3)),
    /* @__PURE__ */ React.createElement(HlsStatsRow, { label: "Dropped frames" }, hlsStatsState == null ? void 0 : hlsStatsState.droppedFrames)
  );
}
function getDurationFromSeconds(timeInSeconds) {
  let time = Math.floor(timeInSeconds);
  const hours = Math.floor(time / 3600);
  time = time - hours * 3600;
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);
  const prefixedMinutes = `${minutes < 10 ? "0" + minutes : minutes}`;
  const prefixedSeconds = `${seconds < 10 ? "0" + seconds : seconds}`;
  let videoTimeStr = `${prefixedMinutes}:${prefixedSeconds}`;
  if (hours) {
    const prefixedHours = `${hours < 10 ? "0" + hours : hours}`;
    videoTimeStr = `${prefixedHours}:${prefixedMinutes}:${prefixedSeconds}`;
  }
  return videoTimeStr;
}
var HlsStatsRow = memo(({ label, children }) => {
  return /* @__PURE__ */ React.createElement(Flex, { gap: 4, justify: "center", css: { width: "100%" } }, /* @__PURE__ */ React.createElement(
    Text,
    {
      css: {
        width: "50%",
        "@md": { fontSize: "$md" },
        "@sm": { fontSize: "$sm" }
        // textAlign: "right",
      }
    },
    label
  ), /* @__PURE__ */ React.createElement(
    Text,
    {
      css: {
        "@md": { fontSize: "$md" },
        "@sm": { fontSize: "$sm" },
        width: "50%",
        overflowWrap: "break-word"
        // textAlign: "left",
      }
    },
    children
  ));
});

// src/Prebuilt/components/HMSVideo/Controls.jsx
var VideoControls = styled(Flex, {
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "stretch",
  width: "100%",
  gap: "$2"
});
var LeftControls = styled(Flex, {
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  gap: "$4"
});
var RightControls = styled(Flex, {
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  gap: "$4"
});

// src/Prebuilt/components/HMSVideo/HMSVideo.jsx
import React2, { forwardRef } from "react";
var HMSVideo = forwardRef((_a, videoRef) => {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return /* @__PURE__ */ React2.createElement(Flex, __spreadValues({ "data-testid": "hms-video", css: { size: "100%", position: "relative" }, direction: "column" }, props), /* @__PURE__ */ React2.createElement("video", { style: { flex: "1 1 0", margin: "0 auto", minHeight: "0" }, ref: videoRef, playsInline: true }), children);
});

// src/Prebuilt/components/HMSVideo/PlayButton.jsx
import React3 from "react";
import { PauseIcon, PlayIcon } from "@100mslive/react-icons";
var PlayButton = ({ onClick, isPaused }) => {
  return /* @__PURE__ */ React3.createElement(Tooltip, { title: isPaused ? "Play" : "Pause", side: "top" }, /* @__PURE__ */ React3.createElement(IconButton, { onClick, "data-testid": "play_pause_btn" }, isPaused ? /* @__PURE__ */ React3.createElement(PlayIcon, { width: 20, height: 20 }) : /* @__PURE__ */ React3.createElement(PauseIcon, { width: 20, height: 20 })));
};

// src/Prebuilt/components/HMSVideo/VideoProgress.jsx
import React4, { useEffect, useRef, useState } from "react";

// src/Prebuilt/components/HMSVideo/HMSVIdeoUtils.js
function getPercentage(a, b) {
  return a / b * 100;
}
function getDurationFromSeconds2(timeInSeconds) {
  let time = Math.floor(timeInSeconds);
  const hours = Math.floor(time / 3600);
  time = time - hours * 3600;
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time - minutes * 60);
  const prefixedMinutes = `${minutes < 10 ? `0${minutes}` : minutes}`;
  const prefixedSeconds = `${seconds < 10 ? `0${seconds}` : seconds}`;
  let videoTimeStr = `${prefixedMinutes}:${prefixedSeconds}`;
  if (hours) {
    const prefixedHours = `${hours < 10 ? `0${hours}` : hours}`;
    videoTimeStr = `${prefixedHours}:${prefixedMinutes}:${prefixedSeconds}`;
  }
  return videoTimeStr;
}

// src/Prebuilt/components/HMSVideo/VideoProgress.jsx
var VideoProgress = ({ onValueChange, hlsPlayer: hlsPlayer2 }) => {
  const [videoProgress, setVideoProgress] = useState(0);
  const [bufferProgress, setBufferProgress] = useState(0);
  const progressRootRef = useRef();
  useEffect(() => {
    const videoEl = hlsPlayer2.getVideoElement();
    const timeupdateHandler = () => {
      var _a;
      const videoProgress2 = Math.floor(getPercentage(videoEl.currentTime, videoEl.duration));
      let bufferProgress2 = 0;
      if (videoEl.buffered.length > 0) {
        bufferProgress2 = Math.floor(getPercentage((_a = videoEl.buffered) == null ? void 0 : _a.end(0), videoEl.duration));
      }
      setVideoProgress(isNaN(videoProgress2) ? 0 : videoProgress2);
      setBufferProgress(isNaN(bufferProgress2) ? 0 : bufferProgress2);
    };
    if (videoEl) {
      videoEl.addEventListener("timeupdate", timeupdateHandler);
    }
    return function cleanup() {
      if (videoEl) {
        videoEl.removeEventListener("timeupdate", timeupdateHandler);
      }
    };
  }, [hlsPlayer2]);
  const onProgressChangeHandler = (e) => {
    const userClickedX = e.clientX - progressRootRef.current.offsetLeft;
    const progressBarWidth = progressRootRef.current.offsetWidth;
    const progress = Math.floor(getPercentage(userClickedX, progressBarWidth));
    const videoEl = hlsPlayer2.getVideoElement();
    const currentTime = progress * videoEl.duration / 100;
    if (onValueChange) {
      onValueChange(currentTime);
    }
  };
  return hlsPlayer2.getVideoElement() ? /* @__PURE__ */ React4.createElement(
    Flex,
    {
      ref: progressRootRef,
      css: { cursor: "pointer", h: "$4", alignSelf: "stretch" },
      onClick: onProgressChangeHandler
    },
    /* @__PURE__ */ React4.createElement(
      Box,
      {
        id: "video-actual",
        css: {
          display: "inline",
          width: `${videoProgress}%`,
          background: "$primary_default"
        }
      }
    ),
    /* @__PURE__ */ React4.createElement(
      Box,
      {
        id: "video-buffer",
        css: {
          width: `${bufferProgress - videoProgress}%`,
          background: "$on_surface_high",
          opacity: "25%"
        }
      }
    ),
    /* @__PURE__ */ React4.createElement(
      Box,
      {
        id: "video-rest",
        css: {
          width: `${100 - bufferProgress}%`,
          background: "$on_surface_high",
          opacity: "10%"
        }
      }
    )
  ) : null;
};

// src/Prebuilt/components/HMSVideo/VideoTime.jsx
import React5, { useEffect as useEffect2, useState as useState2 } from "react";
import { HMSHLSPlayerEvents } from "@100mslive/hls-player";
var VideoTime = ({ hlsPlayer: hlsPlayer2 }) => {
  const [videoTime, setVideoTime] = useState2("");
  useEffect2(() => {
    const timeupdateHandler = (currentTime) => setVideoTime(getDurationFromSeconds2(currentTime));
    if (hlsPlayer2) {
      hlsPlayer2.on(HMSHLSPlayerEvents.CURRENT_TIME, timeupdateHandler);
    }
    return function cleanup() {
      if (hlsPlayer2) {
        hlsPlayer2.off(HMSHLSPlayerEvents.CURRENT_TIME, timeupdateHandler);
      }
    };
  }, [hlsPlayer2]);
  return hlsPlayer2 ? /* @__PURE__ */ React5.createElement(
    Text,
    {
      css: {
        minWidth: "$16",
        c: "$on_surface_medium",
        display: "flex",
        justifyContent: "center"
      }
    },
    videoTime
  ) : null;
};

// src/Prebuilt/components/HMSVideo/VolumeControl.jsx
import React6, { useState as useState3 } from "react";
import { VolumeOneIcon, VolumeTwoIcon, VolumeZeroIcon } from "@100mslive/react-icons";
var VolumeControl = ({ hlsPlayer: hlsPlayer2 }) => {
  var _a;
  const [volume, setVolume] = useState3((_a = hlsPlayer2 == null ? void 0 : hlsPlayer2.volume) != null ? _a : 100);
  const [showSlider, setShowSlider] = useState3(false);
  return /* @__PURE__ */ React6.createElement(
    Flex,
    {
      align: "center",
      css: { color: "$on_surface_high" },
      onMouseOver: (event) => {
        event.stopPropagation();
        setShowSlider(true);
      },
      onMouseLeave: (event) => {
        event.stopPropagation();
        setShowSlider(false);
      }
    },
    /* @__PURE__ */ React6.createElement(
      VolumeIcon,
      {
        volume,
        onClick: () => {
          if (volume > 0) {
            setVolume(0);
            hlsPlayer2 == null ? void 0 : hlsPlayer2.setVolume(0);
          } else {
            setVolume(100);
            hlsPlayer2 == null ? void 0 : hlsPlayer2.setVolume(100);
          }
        }
      }
    ),
    /* @__PURE__ */ React6.createElement(
      Slider,
      {
        css: {
          mx: "$4",
          w: "$20",
          cursor: "pointer",
          "@sm": { w: "$14" },
          "@xs": { w: "$14" },
          opacity: showSlider ? "1" : "0",
          display: showSlider ? "" : "none",
          transition: `all .2s ease .5s`
        },
        min: 0,
        max: 100,
        step: 1,
        value: [volume],
        onValueChange: (volume2) => {
          hlsPlayer2.setVolume(volume2[0]);
          setVolume(volume2[0]);
        },
        thumbStyles: { w: "$6", h: "$6" }
      }
    )
  );
};
var VolumeIcon = ({ volume, onClick }) => {
  if (volume === 0) {
    return /* @__PURE__ */ React6.createElement(VolumeZeroIcon, { style: { cursor: "pointer", transition: "color 0.3s" }, onClick });
  }
  return volume < 50 ? /* @__PURE__ */ React6.createElement(VolumeOneIcon, { style: { cursor: "pointer", transition: "color 0.3s" }, onClick }) : /* @__PURE__ */ React6.createElement(VolumeTwoIcon, { style: { cursor: "pointer", transition: "color 0.3s" }, onClick });
};

// src/Prebuilt/components/HMSVideo/index.js
var HMSVideoPlayer = {
  Root: HMSVideo,
  PlayButton,
  Progress: VideoProgress,
  Duration: VideoTime,
  Volume: VolumeControl,
  Controls: {
    Root: VideoControls,
    Left: LeftControls,
    Right: RightControls
  }
};

// src/Prebuilt/components/HMSVideo/FullscreenButton.jsx
import React7 from "react";
var FullScreenButton = ({ isFullScreen, icon, onToggle }) => {
  return /* @__PURE__ */ React7.createElement(Tooltip, { title: `${isFullScreen ? "Exit" : "Go"} fullscreen`, side: "top" }, /* @__PURE__ */ React7.createElement(
    IconButton,
    {
      variant: "standard",
      css: { margin: "0px" },
      onClick: onToggle,
      key: "fullscreen_btn",
      "data-testid": "fullscreen_btn"
    },
    /* @__PURE__ */ React7.createElement(Flex, null, icon)
  ));
};

// src/Prebuilt/components/HMSVideo/HLSAutoplayBlockedPrompt.jsx
import React8 from "react";
function HLSAutoplayBlockedPrompt({ open, unblockAutoPlay }) {
  return /* @__PURE__ */ React8.createElement(
    Dialog.Root,
    {
      open,
      onOpenChange: (value) => {
        if (!value) {
          unblockAutoPlay();
        }
      }
    },
    /* @__PURE__ */ React8.createElement(DialogContent, { title: "Attention", closeable: false }, /* @__PURE__ */ React8.createElement(DialogRow, null, /* @__PURE__ */ React8.createElement(Text, { variant: "md" }, 'The browser wants us to get a confirmation for playing the HLS Stream. Please click "play stream" to proceed.')), /* @__PURE__ */ React8.createElement(DialogRow, { justify: "end" }, /* @__PURE__ */ React8.createElement(
      Button,
      {
        variant: "primary",
        onClick: () => {
          unblockAutoPlay();
        }
      },
      "Play stream"
    )))
  );
}

// src/Prebuilt/components/HMSVideo/HLSQualitySelector.jsx
import React9 from "react";
import { CheckIcon, SettingsIcon } from "@100mslive/react-icons";
function HLSQualitySelector({ open, onOpen, layers, onQualityChange, selection, isAuto }) {
  return /* @__PURE__ */ React9.createElement(Dropdown.Root, { open, onOpenChange: (value) => onOpen(value) }, /* @__PURE__ */ React9.createElement(Dropdown.Trigger, { asChild: true, "data-testid": "quality_selector" }, /* @__PURE__ */ React9.createElement(
    Flex,
    {
      css: {
        color: "$on_primary_high",
        r: "$1",
        cursor: "pointer",
        p: "$2"
      }
    },
    /* @__PURE__ */ React9.createElement(Tooltip, { title: "Select Quality", side: "top" }, /* @__PURE__ */ React9.createElement(Flex, { align: "center" }, /* @__PURE__ */ React9.createElement(
      Box,
      {
        css: {
          w: "$9",
          h: "$9",
          display: "inline-flex",
          alignItems: "center",
          c: "$on_surface_high"
        }
      },
      /* @__PURE__ */ React9.createElement(SettingsIcon, null)
    ), /* @__PURE__ */ React9.createElement(
      Text,
      {
        variant: {
          "@md": "sm",
          "@sm": "xs",
          "@xs": "tiny"
        },
        css: { display: "flex", alignItems: "center", ml: "$2", c: "$on_surface_medium" }
      },
      isAuto && /* @__PURE__ */ React9.createElement(React9.Fragment, null, "Auto", /* @__PURE__ */ React9.createElement(
        Box,
        {
          css: {
            mx: "$2",
            w: "$2",
            h: "$2",
            background: "$on_surface_medium",
            r: "$1"
          }
        }
      )),
      selection && Math.min(selection.width, selection.height),
      "p"
    )))
  )), layers.length > 0 && /* @__PURE__ */ React9.createElement(
    Dropdown.Content,
    {
      sideOffset: 5,
      align: "end",
      css: {
        height: "auto",
        maxHeight: "$52",
        w: "$40",
        bg: "$surface_bright",
        py: "$4",
        gap: "$4",
        display: "grid"
      }
    },
    layers.map((layer) => {
      return /* @__PURE__ */ React9.createElement(
        Dropdown.Item,
        {
          onClick: () => onQualityChange(layer),
          key: layer.width,
          css: {
            bg: !isAuto && layer.width === (selection == null ? void 0 : selection.width) && layer.height === (selection == null ? void 0 : selection.height) ? "$surface_default" : "$surface_bright",
            "&:hover": {
              bg: "$surface_brighter"
            },
            p: "$2 $4 $2 $8",
            h: "$12",
            gap: "$2"
          }
        },
        /* @__PURE__ */ React9.createElement(Text, { variant: "caption", css: { fontWeight: "$semiBold" } }, getQualityText(layer)),
        /* @__PURE__ */ React9.createElement(Text, { variant: "caption", css: { flex: "1 1 0", c: "$on_surface_low", pl: "$2" } }, getBitrateText(layer)),
        !isAuto && layer.width === (selection == null ? void 0 : selection.width) && layer.height === (selection == null ? void 0 : selection.height) && /* @__PURE__ */ React9.createElement(CheckIcon, { width: "16px", height: "16px" })
      );
    }),
    /* @__PURE__ */ React9.createElement(
      Dropdown.Item,
      {
        onClick: () => onQualityChange({ height: "auto" }),
        key: "auto",
        css: {
          bg: !isAuto ? "$surface_bright" : "$surface_default",
          "&:hover": {
            bg: "$surface_brighter"
          },
          p: "$2 $4 $2 $8",
          h: "$12",
          gap: "$2"
        }
      },
      /* @__PURE__ */ React9.createElement(Text, { variant: "caption", css: { fontWeight: "$semiBold", flex: "1 1 0" } }, "Auto"),
      isAuto && /* @__PURE__ */ React9.createElement(CheckIcon, { width: "16px", height: "16px" })
    )
  ));
}
var getQualityText = (layer) => `${Math.min(layer.height, layer.width)}p `;
var getBitrateText = (layer) => `(${(Number(layer.bitrate / 1e3) / 1e3).toFixed(2)} Mbps)`;

// src/Prebuilt/layouts/HLSView.jsx
var hlsPlayer;
var HLSView = () => {
  var _a;
  const videoRef = useRef2(null);
  const hlsViewRef = useRef2(null);
  const hlsState = useHMSStore(selectHLSState);
  const enablHlsStats = useHMSStore(selectAppData(APP_DATA.hlsStats));
  const hmsActions = useHMSActions();
  const { themeType, theme } = useTheme();
  const [streamEnded, setStreamEnded] = useState4(false);
  let [hlsStatsState, setHlsStatsState] = useState4(null);
  const hlsUrl = (_a = hlsState.variants[0]) == null ? void 0 : _a.url;
  const [availableLayers, setAvailableLayers] = useState4([]);
  const [isVideoLive, setIsVideoLive] = useState4(true);
  const [isUserSelectedAuto, setIsUserSelectedAuto] = useState4(true);
  const [currentSelectedQuality, setCurrentSelectedQuality] = useState4(null);
  const [isHlsAutoplayBlocked, setIsHlsAutoplayBlocked] = useState4(false);
  const [isPaused, setIsPaused] = useState4(false);
  const isFullScreenSupported = screenfull.isEnabled;
  const [show, toggle] = useToggle(false);
  const [controlsVisible, setControlsVisible] = useState4(true);
  const controlsRef = useRef2();
  const controlsTimerRef = useRef2();
  const [qualityDropDownOpen, setQualityDropDownOpen] = useState4(false);
  const lastHlsUrl = usePrevious(hlsUrl);
  const isMobile = useMedia(config.media.md);
  const isFullScreen = useFullscreen(hlsViewRef, show, {
    onClose: () => toggle(false)
  });
  const [showLoader, setShowLoader] = useState4(false);
  useEffect3(() => {
    const videoEl = videoRef.current;
    const showLoader2 = () => setShowLoader(true);
    const hideLoader = () => setShowLoader(false);
    videoEl == null ? void 0 : videoEl.addEventListener("playing", hideLoader);
    videoEl == null ? void 0 : videoEl.addEventListener("waiting", showLoader2);
    return () => {
      videoEl == null ? void 0 : videoEl.removeEventListener("playing", hideLoader);
      videoEl == null ? void 0 : videoEl.removeEventListener("waiting", showLoader2);
    };
  }, []);
  useEffect3(() => {
    if (streamEnded && lastHlsUrl !== hlsUrl) {
      setStreamEnded(false);
    }
  }, [hlsUrl, streamEnded, lastHlsUrl]);
  useEffect3(() => {
    const videoElem = videoRef.current;
    const setStreamEndedCallback = () => {
      setStreamEnded(true);
      videoElem == null ? void 0 : videoElem.removeEventListener("ended", setStreamEndedCallback);
    };
    videoElem == null ? void 0 : videoElem.addEventListener("ended", setStreamEndedCallback);
    return () => {
      videoElem == null ? void 0 : videoElem.removeEventListener("ended", setStreamEndedCallback);
    };
  }, [hlsUrl]);
  useEffect3(() => {
    let videoEl = videoRef.current;
    const manifestLoadedHandler = ({ layers }) => {
      setAvailableLayers(layers);
    };
    const layerUpdatedHandler = ({ layer }) => {
      setCurrentSelectedQuality(layer);
    };
    const metadataLoadedHandler = (_a2) => {
      var _b = _a2, { payload } = _b, rest = __objRest(_b, ["payload"]);
      var _a3;
      const parsePayload = (str) => {
        try {
          return JSON.parse(str);
        } catch (e) {
          return str;
        }
      };
      const duration = rest.duration;
      const parsedPayload = parsePayload(payload);
      switch (parsedPayload.type) {
        case EMOJI_REACTION_TYPE:
          (_a3 = window.showFlyingEmoji) == null ? void 0 : _a3.call(window, { emojiId: parsedPayload == null ? void 0 : parsedPayload.emojiId, senderId: parsedPayload == null ? void 0 : parsedPayload.senderId });
          break;
        default: {
          const toast = {
            title: `Payload from timed Metadata ${parsedPayload}`,
            duration: duration || 3e3
          };
          console.debug("Added toast ", JSON.stringify(toast));
          ToastManager.addToast(toast);
          break;
        }
      }
    };
    const handleError = (data) => {
      console.error("[HLSView] error in hls", `${data}`);
    };
    const handleNoLongerLive = ({ isLive }) => {
      setIsVideoLive(isLive);
    };
    const playbackEventHandler = (data) => setIsPaused(data.state === HLSPlaybackState.paused);
    const handleAutoplayBlock = (data) => setIsHlsAutoplayBlocked(!!data);
    if (videoEl && hlsUrl) {
      hlsPlayer = new HMSHLSPlayer(hlsUrl, videoEl);
      hlsPlayer.on(HMSHLSPlayerEvents2.SEEK_POS_BEHIND_LIVE_EDGE, handleNoLongerLive);
      hlsPlayer.on(HMSHLSPlayerEvents2.TIMED_METADATA_LOADED, metadataLoadedHandler);
      hlsPlayer.on(HMSHLSPlayerEvents2.ERROR, handleError);
      hlsPlayer.on(HMSHLSPlayerEvents2.PLAYBACK_STATE, playbackEventHandler);
      hlsPlayer.on(HMSHLSPlayerEvents2.AUTOPLAY_BLOCKED, handleAutoplayBlock);
      hlsPlayer.on(HMSHLSPlayerEvents2.MANIFEST_LOADED, manifestLoadedHandler);
      hlsPlayer.on(HMSHLSPlayerEvents2.LAYER_UPDATED, layerUpdatedHandler);
      return () => {
        hlsPlayer.off(HMSHLSPlayerEvents2.SEEK_POS_BEHIND_LIVE_EDGE, handleNoLongerLive);
        hlsPlayer.off(HMSHLSPlayerEvents2.ERROR, handleError);
        hlsPlayer.off(HMSHLSPlayerEvents2.TIMED_METADATA_LOADED, metadataLoadedHandler);
        hlsPlayer.off(HMSHLSPlayerEvents2.PLAYBACK_STATE, playbackEventHandler);
        hlsPlayer.off(HMSHLSPlayerEvents2.AUTOPLAY_BLOCKED, handleAutoplayBlock);
        hlsPlayer.off(HMSHLSPlayerEvents2.MANIFEST_LOADED, manifestLoadedHandler);
        hlsPlayer.off(HMSHLSPlayerEvents2.LAYER_UPDATED, layerUpdatedHandler);
        hlsPlayer.reset();
        hlsPlayer = null;
      };
    }
  }, [hlsUrl]);
  useEffect3(() => {
    const onHLSStats = (state) => setHlsStatsState(state);
    if (enablHlsStats) {
      hlsPlayer == null ? void 0 : hlsPlayer.on(HMSHLSPlayerEvents2.STATS, onHLSStats);
    } else {
      hlsPlayer == null ? void 0 : hlsPlayer.off(HMSHLSPlayerEvents2.STATS, onHLSStats);
    }
    return () => {
      hlsPlayer == null ? void 0 : hlsPlayer.off(HMSHLSPlayerEvents2.STATS, onHLSStats);
    };
  }, [enablHlsStats]);
  const unblockAutoPlay = () => __async(void 0, null, function* () {
    try {
      yield hlsPlayer.play();
      setIsHlsAutoplayBlocked(false);
    } catch (error) {
      console.error("Tried to unblock Autoplay failed with", error.message);
    }
  });
  const handleQuality = useCallback(
    (quality) => {
      if (hlsPlayer) {
        setIsUserSelectedAuto(quality.height.toString().toLowerCase() === "auto");
        hlsPlayer.setLayer(quality);
      }
    },
    [availableLayers]
    //eslint-disable-line
  );
  const sfnOverlayClose = () => {
    hmsActions.setAppData(APP_DATA.hlsStats, !enablHlsStats);
  };
  useEffect3(() => {
    if (controlsVisible && isFullScreen && !qualityDropDownOpen) {
      if (controlsTimerRef.current) {
        clearTimeout(controlsTimerRef.current);
      }
      controlsTimerRef.current = setTimeout(() => {
        setControlsVisible(false);
      }, 5e3);
    }
    if (!isFullScreen && controlsTimerRef.current) {
      clearTimeout(controlsTimerRef.current);
    }
    return () => {
      if (controlsTimerRef.current) {
        clearTimeout(controlsTimerRef.current);
      }
    };
  }, [controlsVisible, isFullScreen, qualityDropDownOpen]);
  const onHoverHandler = useCallback(
    (event) => {
      if (event.type === "mouseenter" || qualityDropDownOpen) {
        setControlsVisible(true);
        return;
      }
      if (event.type === "mouseleave") {
        setControlsVisible(false);
      } else if (isFullScreen && !controlsVisible && event.type === "mousemove") {
        setControlsVisible(true);
        if (controlsTimerRef.current) {
          clearTimeout(controlsTimerRef.current);
        }
      }
    },
    [controlsVisible, isFullScreen, qualityDropDownOpen]
  );
  return /* @__PURE__ */ React10.createElement(
    Flex,
    {
      key: "hls-viewer",
      id: `hls-viewer-${themeType}`,
      ref: hlsViewRef,
      css: {
        size: "100%"
      }
    },
    (hlsStatsState == null ? void 0 : hlsStatsState.url) && enablHlsStats ? /* @__PURE__ */ React10.createElement(HlsStatsOverlay, { hlsStatsState, onClose: sfnOverlayClose }) : null,
    hlsUrl && !streamEnded ? /* @__PURE__ */ React10.createElement(
      Flex,
      {
        id: "hls-player-container",
        align: "center",
        justify: "center",
        css: {
          width: "100%",
          margin: "0 auto",
          height: "100%"
        }
      },
      /* @__PURE__ */ React10.createElement(HLSAutoplayBlockedPrompt, { open: isHlsAutoplayBlocked, unblockAutoPlay }),
      showLoader && /* @__PURE__ */ React10.createElement(
        Flex,
        {
          align: "center",
          justify: "center",
          css: {
            position: "absolute"
          }
        },
        /* @__PURE__ */ React10.createElement(Loading, { width: 72, height: 72 })
      ),
      /* @__PURE__ */ React10.createElement(
        HMSVideoPlayer.Root,
        {
          ref: videoRef,
          onMouseEnter: onHoverHandler,
          onMouseMove: onHoverHandler,
          onMouseLeave: onHoverHandler
        },
        isMobile && isPaused && /* @__PURE__ */ React10.createElement(
          Box,
          {
            css: {
              position: "absolute",
              top: "40%",
              left: "50%",
              transform: "translateY(-40%) translateX(-50%)",
              padding: "$8 14px $8 18px",
              display: "inline-flex",
              r: "50%",
              gap: "$1",
              bg: "$primary_default",
              zIndex: 21
            }
          },
          /* @__PURE__ */ React10.createElement(IconButton, { onClick: () => __async(void 0, null, function* () {
            return yield hlsPlayer == null ? void 0 : hlsPlayer.play();
          }), "data-testid": "play_btn" }, /* @__PURE__ */ React10.createElement(PlayIcon2, { width: "60px", height: "60px" }))
        ),
        /* @__PURE__ */ React10.createElement(
          Flex,
          {
            ref: controlsRef,
            direction: "column",
            justify: "flex-end",
            align: "flex-start",
            css: {
              position: "absolute",
              bottom: "0",
              left: "0",
              background: `linear-gradient(180deg, ${theme.colors.background_dim.value}00 29.46%, ${theme.colors.background_dim.value}A3 100%);`,
              width: "100%",
              pt: "$8",
              flexShrink: 0,
              transition: "visibility 0s 0.5s, opacity 0.5s linear",
              visibility: controlsVisible ? `` : `hidden`,
              opacity: controlsVisible ? `1` : "0"
            }
          },
          !isMobile && /* @__PURE__ */ React10.createElement(
            HMSVideoPlayer.Controls.Root,
            {
              css: {
                p: "$4 $8"
              }
            },
            /* @__PURE__ */ React10.createElement(HMSVideoPlayer.Controls.Left, null, /* @__PURE__ */ React10.createElement(
              HMSVideoPlayer.PlayButton,
              {
                onClick: () => __async(void 0, null, function* () {
                  isPaused ? yield hlsPlayer == null ? void 0 : hlsPlayer.play() : hlsPlayer == null ? void 0 : hlsPlayer.pause();
                }),
                isPaused
              }
            ), /* @__PURE__ */ React10.createElement(HMSVideoPlayer.Duration, { hlsPlayer }), /* @__PURE__ */ React10.createElement(HMSVideoPlayer.Volume, { hlsPlayer }), /* @__PURE__ */ React10.createElement(
              IconButton,
              {
                variant: "standard",
                css: { px: "$2" },
                onClick: () => __async(void 0, null, function* () {
                  yield hlsPlayer.seekToLivePosition();
                  setIsVideoLive(true);
                }),
                key: "jump-to-live_btn",
                "data-testid": "jump-to-live_btn"
              },
              /* @__PURE__ */ React10.createElement(Tooltip, { title: "Go to Live", side: "top" }, /* @__PURE__ */ React10.createElement(Flex, { justify: "center", gap: 2, align: "center" }, /* @__PURE__ */ React10.createElement(
                Box,
                {
                  css: {
                    height: "$4",
                    width: "$4",
                    background: isVideoLive ? "$alert_error_default" : "$on_primary_medium",
                    r: "$1"
                  }
                }
              ), /* @__PURE__ */ React10.createElement(
                Text,
                {
                  variant: {
                    "@sm": "xs"
                  },
                  css: {
                    c: isVideoLive ? "$on_surface_high" : "$on_surface_medium"
                  }
                },
                isVideoLive ? "LIVE" : "GO LIVE"
              )))
            )),
            /* @__PURE__ */ React10.createElement(HMSVideoPlayer.Controls.Right, null, availableLayers.length > 0 ? /* @__PURE__ */ React10.createElement(
              HLSQualitySelector,
              {
                layers: availableLayers,
                onOpen: setQualityDropDownOpen,
                open: qualityDropDownOpen,
                selection: currentSelectedQuality,
                onQualityChange: handleQuality,
                isAuto: isUserSelectedAuto
              }
            ) : null, isFullScreenSupported ? /* @__PURE__ */ React10.createElement(
              FullScreenButton,
              {
                isFullScreen,
                onToggle: toggle,
                icon: isFullScreen ? /* @__PURE__ */ React10.createElement(ShrinkIcon, null) : /* @__PURE__ */ React10.createElement(ExpandIcon, null)
              }
            ) : null)
          )
        )
      )
    ) : /* @__PURE__ */ React10.createElement(Flex, { align: "center", justify: "center", direction: "column", css: { size: "100%", px: "$10" } }, /* @__PURE__ */ React10.createElement(Flex, { css: { c: "$on_surface_high", r: "$round", bg: "$surface_default", p: "$2" } }, streamEnded ? /* @__PURE__ */ React10.createElement(ColoredHandIcon, { height: 56, width: 56 }) : /* @__PURE__ */ React10.createElement(RadioIcon, { height: 56, width: 56 })), /* @__PURE__ */ React10.createElement(Text, { variant: "h5", css: { c: "$on_surface_high", mt: "$10", mb: 0, textAlign: "center" } }, streamEnded ? "Stream has ended" : "Stream yet to start"), /* @__PURE__ */ React10.createElement(Text, { variant: "md", css: { textAlign: "center", mt: "$4", c: "$on_surface_medium" } }, streamEnded ? "Have a nice day!" : "Sit back and relax"))
  );
};
var HLSView_default = HLSView;
export {
  HLSView_default as default
};
//# sourceMappingURL=HLSView-7WXNI2WP.js.map
