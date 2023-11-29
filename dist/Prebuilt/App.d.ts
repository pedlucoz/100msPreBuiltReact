import React from 'react';
import { HMSStatsStoreWrapper, HMSStoreWrapper, IHMSNotifications } from '@100mslive/hms-video-store';
import { Logo, Screens, Theme, Typography } from '@100mslive/types-prebuilt';
import { HMSActions } from '@100mslive/react-sdk';
export declare type HMSPrebuiltOptions = {
    userName?: string;
    userId?: string;
    endpoints?: object;
};
export declare type HMSPrebuiltProps = {
    roomCode?: string;
    logo?: Logo;
    typography?: Typography;
    themes?: Theme[];
    options?: HMSPrebuiltOptions;
    screens?: Screens;
    authToken?: string;
    roomId?: string;
    role?: string;
    onLeave?: () => void;
    onJoin?: () => void;
    /**
     * @remarks
     * Specify css selectors for the HTML element to be used as container for dialogs. Affects the positioning and focus of dialogs.
     */
    containerSelector?: string;
};
export declare type HMSPrebuiltRefType = {
    hmsActions: HMSActions;
    hmsStore: HMSStoreWrapper;
    hmsStats: HMSStatsStoreWrapper;
    hmsNotifications: IHMSNotifications;
};
export declare const HMSPrebuilt: React.ForwardRefExoticComponent<HMSPrebuiltProps & React.RefAttributes<HMSPrebuiltRefType>>;
