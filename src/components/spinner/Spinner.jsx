import React from 'react';
import styled from './Spinner.module.css';

const Spinner = () => (
    <div className={styled.spinner}>
        <div className={styled['double-bounce1']}></div>
        <div className={styled['double-bounce2']}></div>
    </div>
)

export default Spinner
