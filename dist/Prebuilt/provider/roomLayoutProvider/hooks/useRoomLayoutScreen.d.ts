import { ConferencingScreen, DefaultPreviewScreen_Elements, Screens } from '@100mslive/types-prebuilt';
export declare type useRoomLayoutScreenProps = {
    screen: keyof Screens;
};
export declare function useRoomLayoutPreviewScreen(): {
    isPreviewScreenEnabled: boolean;
    elements: DefaultPreviewScreen_Elements | undefined;
    screenType: "default" | undefined;
};
export declare function useRoomLayoutConferencingScreen(): {
    hideSections: string[];
    elements: import("@100mslive/types-prebuilt").DefaultConferencingScreen_Elements | import("@100mslive/types-prebuilt").HLSLiveStreamingScreen_Elements | undefined;
    screenType: keyof ConferencingScreen;
};
export declare function useRoomLayoutLeaveScreen(): {
    isLeaveScreenEnabled: boolean;
};
