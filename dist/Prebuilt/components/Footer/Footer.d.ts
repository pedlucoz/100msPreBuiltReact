import React from 'react';
import { ConferencingScreen, DefaultConferencingScreen_Elements, HLSLiveStreamingScreen_Elements } from '@100mslive/types-prebuilt';
export declare const Footer: ({ screenType, elements, }: {
    screenType: keyof ConferencingScreen;
    elements: DefaultConferencingScreen_Elements | HLSLiveStreamingScreen_Elements;
}) => React.JSX.Element;
