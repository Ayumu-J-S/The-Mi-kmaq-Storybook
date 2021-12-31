import styled from "styled-components";

const StoryText = styled.p`
    font-size: 20px;
    position: relative;
    margin: auto;
    width: 90%;
    height: 35vh;
    overflow: scroll;
    display: flex;
    margin: auto;
    border-radius: 10px;
    border: 3px solid #1c87c9;
    align-items: center;
    justify-content: center;

    &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.5);
        -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }

    &::-webkit-scrollbar-corner {
        background-color: rgba(0, 0, 0, 0);
    }
`;

export default StoryText;
