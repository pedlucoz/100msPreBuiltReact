import React from 'react';
import { TrackWithPeerAndDimensions } from '@100mslive/react-sdk';
import { CSS } from '../../../Theme';
export declare const ProminenceLayout: {
    Root: ({ children, edgeToEdge }: React.PropsWithChildren<{
        edgeToEdge?: boolean | undefined;
    }>) => React.JSX.Element;
    ProminentSection: ({ children, css }: React.PropsWithChildren<{
        css?: CSS | undefined;
    }>) => React.JSX.Element;
    SecondarySection: ({ tiles, children, edgeToEdge, }: React.PropsWithChildren<{
        tiles: TrackWithPeerAndDimensions[];
        edgeToEdge?: boolean | undefined;
    }>) => React.JSX.Element | null;
};
