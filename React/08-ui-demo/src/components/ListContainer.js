import styled from "styled-components";

const ListContainer = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;

    li {
        padding: 5px 10px;
        cursor: pointer;
        border-bottom: 1px dotted #d5d5d5;

        &:first-child {
            border-top: 1px dotted #d5d5d5;
        }

        &.blue {
            background-color: #06f2;
        }

        &.orange {
            background-color: #f602;
        }

        &.pink {
            background-color: #f0f2;
        }
    }
`;

export default ListContainer;