import styled from "styled-components";
import mq from '../MediaQuery';

const ImageList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    .list-item {
        box-sizing: border-box;
        width: 50%;
        flex: none;
        padding: 10px;

        ${mq.minWidth('sm')`
            width: 33.3%;
        `}

        ${mq.minWidth('md')`
            width: 25%;
        `}

        ${mq.minWidth('lg')`
            width: 20%;
        `}

        .list-item-link {
            border: 1px solid #d5d5d5;
            box-sizing: border-box;
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: #000;
            transition: all 0.1s;

            &:hover {
                background-color: #eeeeee55;
            }

            .thumbnail {
                width: 100%;
                position: relative;

                &:after {
                    content: '';
                    display: block;
                    padding-bottom: 80%;
                }

                img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                }
            }

            .content {
                flex: none;
                width: 100%;
                box-sizing: border-box;
                padding: 10px;
                display: flex;
                flex-direction: column;
                align-content: flex-start;
                padding: 10px 15px;

                h3 {
                    box-sizing: border-box;
                    font-size: 18px;
                    height: 20px;
                    line-height: 20px;
                    font-weight: bold;
                    margin: 10px 0;

                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;

                    li {
                        font-size: 12px;
                    }
                }
            }
        }

    }
`;

export default ImageList;