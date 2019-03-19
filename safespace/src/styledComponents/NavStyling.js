import styled from 'styled-components';

export const ToggleWrapper = styled.div`
    margin: 0.5em auto;
    label {
        padding: 0.3em;
        font-size: 17px;
        display: block;
    } 
`;

export const ToggleContainer = styled.div`
    width: 100%;
    position: relative;
    background: #ffffff;
    border: 1px solid #eeeeee;
    toggleOption {
        display: inline-block;
        position: relative;
        z-index: 1;
        text-align: center;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        color: #807b77;
        font-size: 1em;
        selected {
            color: #ffffff;
            cursor: initial;
        }
    }
    toggle {
        position: absolute;
        height: 100%;
        bottom: 0;
        left: 0;
        transition: all 0.4s ease-in-out;
        background: #df5d5d;
    }
`;

export const OptionDisabled = styled.div`
    background: #e6e6e6;
    cursor: no-drop !important;
`;