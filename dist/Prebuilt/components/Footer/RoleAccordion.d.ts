import React from 'react';
import { HMSPeer } from '@100mslive/react-sdk';
export declare const ROW_HEIGHT = 50;
export interface ItemData {
    peerList: HMSPeer[];
    isConnected: boolean;
}
export declare function itemKey(index: number, data: ItemData): string;
export declare const VirtualizedParticipantItem: React.MemoExoticComponent<({ index, data }: {
    index: number;
    data: ItemData;
}) => React.JSX.Element>;
export declare const RoleAccordion: ({ peerList, roleName, isConnected, filter, isHandRaisedAccordion, offStageRoles, onActive, }: ItemData & {
    roleName: string;
    isHandRaisedAccordion?: boolean | undefined;
    filter?: {
        search: string;
    } | undefined;
    offStageRoles: string[];
    onActive?: ((role: string) => void) | undefined;
}) => React.JSX.Element | null;
