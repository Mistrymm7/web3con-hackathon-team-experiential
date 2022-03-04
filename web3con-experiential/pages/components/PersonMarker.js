import React from "react";

function PersonMarker({ onClick }) {

    const size = 0.5;

    // will need to be wrapped in <Marker> component in the main Map component
    return (
        <svg viewBox="0 0 24 24">
            <ellipse cx="0" cy="0" rx={size} ry={size} onClick={onClick} style={{
                cursor: 'pointer',
                fill: '#d00',
                stroke: 'none',
                opacity: 0.7
            }} />
        </svg>
    );
}

export default React.memo(PersonMarker);