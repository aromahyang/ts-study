import { decorate, observable, action } from 'mobx';

export default class Stores {
    player = 0;
    winnder = 0;

    changePlayer = (value: number) => {
        this.player = value;
    }

    changeWinner = (value: number) => {
        this.winnder = value;
    }
}

decorate(Stores, {
    player: observable,
    changePlayer: action,
    changeWinner: action,
});