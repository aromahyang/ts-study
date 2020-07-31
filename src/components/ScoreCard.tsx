import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import './Board.css';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    min-width: 240px;
    height: 100px;
    margin: 0 auto;
    background-color: ${props => props.backgroundColor}
`;

const StyledParagraph = styled.p`
    text-align: center;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 1.6;
`;

function ScoreCard(props) {
    const playerNumber = Number(props.name[props.name.length-1]);

    return(
        <StyledDiv className="card-container" backgroundColor={props.backgroundColor}>
            <StyledParagraph className="card-name">
                {props.name}<br/>
                {props.scores[playerNumber-1]}
            </StyledParagraph>
        </StyledDiv>
    );
}

export default inject(({ store }) => ({
    winner: store.winner,
    scores: store.scores,
}))(observer(ScoreCard));