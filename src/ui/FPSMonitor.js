import Stats from 'stats.js';
export class FPSMonitor {
    stats = new Stats();
    constructor() {
        this.stats.showPanel(0);
        document.body.appendChild(this.stats.dom);
    }
}
