export class CommandManager {
    history = [];
    execute(command) {
        command.execute();
        this.history.push(command);
    }
    undo() {
        const command = this.history.pop();
        command?.undo();
    }
}
