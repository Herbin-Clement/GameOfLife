import React from 'react';

import './Display.css';

import Node from '../Node/Node';

type DisplayProps = {
    width: number,
    height: number
};

const Display = ({width, height}: DisplayProps) => {

    const nodes: Array<Array<Node>> = Array(100).fill(null).map(() => Array(100));
    nodes.forEach((e) => {
        console.log(e);
    })

    return(
        <Node color='white'></Node>
    );
};

export default Display;