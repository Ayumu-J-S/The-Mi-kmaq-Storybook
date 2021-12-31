import styled from "styled-components";

const StoryPicture = styled.img`
    margin: 10px auto 10px auto;
    max-width: 100%;
    height: auto;
    justify-content: center;
    object-fit: cover;
    width: 80%;
    border-radius: 20px;
    aspect-ratio: 4/2.7;

    @media only screen and (max-width: 800px) {
        width: 55%;
    }
`;

export default StoryPicture;
