import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';

const Functions = ({onContentClear, onDelet}) => (
    <section className="functions">
        <Button type='button-long-text' text="Clear" clickHandler={onContentClear}></Button>
        <Button text="&larr;" clickHandler={onDelet}></Button>
    </section>
)

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelet: PropTypes.func.isRequired
}

export default Functions;