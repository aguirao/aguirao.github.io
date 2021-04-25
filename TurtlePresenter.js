class TurtlePresenter {

    constructor(turtleCanvas, commandsBar) {
        this.turtleCanvas = turtleCanvas;
        this.commandsBar = commandsBar;
    }

    show = () => {
        this.turtleCanvas.draw();
    }

    runExpression = expression => {
        let tokens = expression.split(" ");
        if (tokens.length != 2) {
            this.turtleCanvas.error("The expression must have 2 words: [command argument]");
        } else {
            try {
                this.turtleCanvas[tokens[0]](parseInt(tokens[1]));
            } catch (e) {
                this.turtleCanvas.error("Command [" + tokens[0] + "] does not exist.");
            }
        }
    }

    clear = () => {
        console.log("clear");
    }

}
