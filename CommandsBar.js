class CommandsBar {

    constructor(commandsInput, playButton, clearButton) {
        this.commandsInput = commandsInput;
        playButton.onclick = this.play;
        clearButton.onclick = this.clear;
    }

    play = e => {
        this.presenter.runExpression(this.commandsInput.value);
    }

    clear = e => {
        this.presenter.clear();
    }

    setPresenter = turtlePresenter => {
        this.presenter = turtlePresenter;
    }

}
