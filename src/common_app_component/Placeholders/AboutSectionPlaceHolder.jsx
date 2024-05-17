import React from 'react';
import { Placeholder } from 'react-bootstrap';

function AboutSectionPlaceHolder(props) {
    return (
        <>
            <Placeholder as="h1" className="w-100" animation="glow">
                <Placeholder xs={12} />
            </Placeholder>

            <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
            </Placeholder>

            <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
                <Placeholder xs={12} />
            </Placeholder>
        </>
    );
}

export default AboutSectionPlaceHolder;