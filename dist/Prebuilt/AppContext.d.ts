import React from 'react';
declare type HMSPrebuiltContextType = {
    roomCode: string;
    roomId?: string;
    role?: string;
    userName?: string;
    userId?: string;
    containerSelector: string;
    endpoints?: Record<string, string>;
    onLeave?: () => void;
    onJoin?: () => void;
};
export declare const HMSPrebuiltContext: React.Context<HMSPrebuiltContextType>;
export declare const useHMSPrebuiltContext: () => HMSPrebuiltContextType;
export {};
