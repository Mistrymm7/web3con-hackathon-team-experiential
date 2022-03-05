import React from "react";

// onClick is passed by the parent to define what happens when a marker is clicked
function PersonMarker({ onClick }) {

    // will need to be wrapped in <Marker> component in the main Map component
    return (
        <svg viewBox="0 0 64 64">
            <circle cx="50%" cy="50%" r="50%" onClick={onClick} style={{
                cursor: 'pointer',
                fill: '#d00',
                stroke: 'none',
                opacity: 0.7
            }} />
        </svg>
    );
}

export default React.memo(PersonMarker);