class Strip
{
    constructor()
    {
        this.nullSymbol = '0';
    }


    Write(symbol, index)
    {
        document.getElementById(`#strip_${index}`).innerText = symbol;
    }

}

class Head
{
    constructor()
    {
        this.currentState = 1;
        this.currentPosition = 0;

        this.strip = new Strip();
    }

    GetCurrentState = () => this.currentState;

    GetCurrentSymbol = () => document.querySelector(`#strip_${this.currentPosition}`).innerText;

    ToState(newState)
    {
        this.ReloadSheet(newState, this.currentPosition);
        this.currentState = newState;
    }

    Write(symbol)
    {
        this.strip.Write(symbol, this.currentPosition);
    }

    MoveTo(direction)
    {
        this.ReloadSheet(this.currentState, this.currentPosition + direction);
        this.currentPosition += direction;
    }

    ReloadSheet(newState, newPosition)
    {
        document.querySelector(`#head_${this.currentPosition}`).innerText = '';
        document.querySelector(`#head_${newPosition}`).innerText = '\\[ \\uparrow \\]';

        document.querySelector(`#state_${this.currentPosition}`).innerText = '';
        document.querySelector(`#state_${newPosition}`).innerText = `\\[ \\q_${newState} \\]`;
    }
}

class TuringMachine
{
    /**
     * @param {Array} commands
     */
    constructor(commands)
    {
        this.commands = commands;
        this.head = new Head();
    }

    DoCommand()
    {
        let currentCommand = commands[this.head.GetCurrentState()][this.head.GetCurrentSymbol()];

        this.head.ToState(currentCommand.state);
        this.head.Write(currentCommand.symbol);
        this.head.MoveTo(currentCommand.direction);
    }
}

MT = new TuringMachine([[{}, {}], [{"state" : 1, "symbol" : '0', "direction" : 1}]])

