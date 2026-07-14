export class EventBus {
    events = new Map();
    on(event, callback) {
        const callbacks = this.events.get(event) ?? [];
        callbacks.push(callback);
        this.events.set(event, callbacks);
    }
    emit(event, ...args) {
        const callbacks = this.events.get(event);
        if (!callbacks)
            return;
        callbacks.forEach(cb => cb(...args));
    }
}
