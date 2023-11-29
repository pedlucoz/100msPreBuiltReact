import React from 'react';
declare const PreviewForm: ({ name, onChange, onJoin, enableJoin, cannotPublishVideo, cannotPublishAudio, }: {
    name: string;
    onChange: (name: string) => void;
    onJoin: () => void;
    enableJoin: boolean;
    cannotPublishVideo: boolean;
    cannotPublishAudio: boolean;
}) => React.JSX.Element;
export default PreviewForm;
