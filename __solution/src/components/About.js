import React from 'react';
import styled from 'styled-components';

import Paragraph from './Paragraph';

function About(props) {
    return (
        <>
            <Paragraph>
                Fruit emporium is founded on a very simple principle:{' '}
                <strong>Fruit is good.</strong>
            </Paragraph>
            <Paragraph>
                We carry the finest selection of produce from around the world, from
                tart citrus to sweet cherries. Our sellers are world-class, and your
                fruit is guaranteed to be worthy of auction in Asian markets.
            </Paragraph>
        </>
    );
}

const Intro = styled.div`
    padding-bottom: 24px;
`;

export default About;
