import React from 'react';
export declare const LiveStatus: () => React.JSX.Element | null;
export declare const RecordingStatus: () => React.JSX.Element | null;
/**
 * @description only start recording button will be shown.
 */
export declare const StreamActions: () => React.JSX.Element;
export declare const StopRecordingInSheet: ({ onStopRecording, onClose, }: {
    onStopRecording: () => void;
    onClose: () => void;
}) => React.JSX.Element;
