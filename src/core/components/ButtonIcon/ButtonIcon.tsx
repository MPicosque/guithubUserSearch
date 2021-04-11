import React from 'react';
import './styles.css';

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (
    console.log("Button pressed"),
    <div className="d_flex">
        <button className="btn-icon">
        <p>
            { text }
        </p>
        </button>
    </div>

);

export default ButtonIcon;