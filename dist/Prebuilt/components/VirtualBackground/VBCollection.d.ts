import React from 'react';
export declare const VBCollection: ({ options, title, activeBackgroundType, activeBackground, }: {
    options: {
        title?: string | undefined;
        icon?: React.JSX.Element | undefined;
        onClick?: (() => Promise<void>) | undefined;
        mediaURL?: string | undefined;
        type: string;
    }[];
    title: string;
    activeBackground: HTMLImageElement | string;
    activeBackgroundType: string;
}) => React.JSX.Element | null;
