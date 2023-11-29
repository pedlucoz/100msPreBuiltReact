import React from 'react';
export declare const RequestPrompt: ({ open, onOpenChange, title, body, actionText, onAction, }: {
    open?: boolean | undefined;
    onOpenChange: (value: boolean) => void;
    title: string;
    body: React.ReactNode;
    actionText?: string | undefined;
    onAction: () => void;
}) => React.JSX.Element;
