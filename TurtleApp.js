realFGCanvas = document.getElementById("TurtleFGCanvas");
realBGCanvas = document.getElementById("TurtleBGCanvas");
turtleCanvas = new TurtleCanvas(realBGCanvas, realFGCanvas);

commandsInput = document.getElementById("commandsInput");
playButton = document.getElementById("playButton");
clearButton = document.getElementById("clearButton");
commandsBar = new CommandsBar(commandsInput, playButton, clearButton);

turtlePresenter = new TurtlePresenter(turtleCanvas, commandsBar);
this.presenter = turtlePresenter;
commandsBar.setPresenter(turtlePresenter);
turtlePresenter.show();
