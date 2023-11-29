import React from 'react';
import { ConferencingScreen } from '@100mslive/types-prebuilt';
import { TileCustomisationProps } from '../components/VideoLayouts/GridLayout';
declare const SidePane: ({ screenType, tileProps, hideControls, }: {
    screenType: keyof ConferencingScreen;
    tileProps?: TileCustomisationProps | undefined;
    hideControls?: boolean | undefined;
}) => React.JSX.Element | null;
export default SidePane;
