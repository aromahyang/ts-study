import { decorate, observable, action } from 'mobx';
import 'mobx-react-lite/batchingForReactDom';

export default class Stores {
    player = 0;
    winner = 0;
    scores = [0, 0];

    changePlayer = (value: number) => {
        this.player = value;
    }

    changeWinner = (value: number) => {
        this.winner = value;
    }

    changeScore = (player: number) => {
        this.scores[player-1] += 1;
    }
}

decorate(Stores, {
    player: observable,
    winner: observable,
    scores: observable,
    changePlayer: action,
    changeWinner: action,
    changeScore: action,
});