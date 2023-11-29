import React from 'react';
import { ConferencingScreen } from '@100mslive/types-prebuilt';
export declare const DesktopLeaveRoom: ({ leaveRoom, screenType, endRoom, }: {
    leaveRoom: (options?: {
        endStream?: boolean;
    }) => Promise<void>;
    screenType: keyof ConferencingScreen;
    endRoom: () => Promise<void>;
}) => React.JSX.Element | null;
