import styled from "styled-components";

/**
 * @author Ayumu Saito
 * A styled component for the button.
 */
const Button = styled.button`
    font-family: "Comic Sans MS", "Comic Sans";
    font-weight: bold;
    width: 250px;
    margin: 20px;
    padding: 10px;
    border-radius: 12px;
    font-size: 24px;
    text-align: relative;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: rgb(82, 122, 122);
    border: none;
    box-shadow: 0 9px rgb(216, 212, 212);

    :hover {
        background-color: rgb(71, 107, 107);
        color: black;
    }

    :active {
        background-color: #00d2f7;
        box-shadow: 0 5px rgb(82, 212, 212);
        transform: translateY(4px);
    }
`;

export default Button;
