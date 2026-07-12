import Stats from 'stats.js';

export class FPSMonitor {

    public readonly stats =
        new Stats();

    constructor(){

        this.stats.showPanel(0);

        document.body.appendChild(
            this.stats.dom
        );

    }

}