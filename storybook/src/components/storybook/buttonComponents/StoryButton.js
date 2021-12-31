import styled from "styled-components";

const StoryButton = styled.button`
    padding: ${({ padding }) => padding || "10px 20px"};
    font-size: ${({ fontSize }) => fontSize || "24px"};
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: ${({ backgroundColor }) => backgroundColor || "#8fbc8f"};
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px rgb(216, 212, 212);
    margin: ${({ margin }) => margin || "5px 5px 15px 5px"};

    &:hover {
        background-color: #00d2f7c0;
    }

    &:active {
        background-color: #00d2f7;
        box-shadow: 0 5px rgb(216, 212, 212);
        transform: translateY(4px);
    }
`;

export default StoryButton;
