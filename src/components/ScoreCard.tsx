import React, { useState } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import './Board.css';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
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

type ScoreCardProps = {
    name: string;
    backgroundColor: string;
}

function ScoreCard({ name, backgroundColor }: ScoreCardProps) {
    const [score, setScore] = useState(0);

    const increaseScore = () => setScore(score + 1);

    return(
        <StyledDiv className="card-container" backgroundColor={backgroundColor}>
            <StyledParagraph className="card-name">
                {name}<br/>
                {score}
            </StyledParagraph>
        </StyledDiv>
    );
}

export default inject(({ store }) => ({
    changeWinner: store.changeWinner
}))(observer(ScoreCard));