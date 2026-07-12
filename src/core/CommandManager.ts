import type {ICommand} from './ICommand';

export class CommandManager {

    private history:ICommand[]=[];

    execute(command:ICommand){

        command.execute();

        this.history.push(command);

    }

    undo(){

        const command=this.history.pop();

        command?.undo();

    }

}