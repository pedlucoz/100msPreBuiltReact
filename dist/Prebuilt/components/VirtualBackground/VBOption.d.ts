import React from 'react';
export declare const VBOption: {
    Root: ({ onClick, mediaURL, isActive, children, }: {
        onClick?: (() => Promise<void>) | undefined;
        mediaURL?: string | undefined;
        isActive: boolean;
        children?: React.JSX.Element[] | undefined;
    }) => React.JSX.Element;
    Title: ({ children }: {
        children?: string | undefined;
    }) => React.JSX.Element | null;
    Icon: ({ children }: {
        children?: React.JSX.Element | undefined;
    }) => React.JSX.Element | null;
};
