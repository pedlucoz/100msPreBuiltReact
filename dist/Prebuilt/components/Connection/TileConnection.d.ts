import React from 'react';
declare const TileConnection: ({ name, peerId, hideLabel, width, spotlighted, pinned, }: {
    name: string;
    peerId: string;
    hideLabel: boolean;
    width?: number | undefined;
    spotlighted?: boolean | undefined;
    pinned?: boolean | undefined;
}) => React.JSX.Element;
export default TileConnection;
