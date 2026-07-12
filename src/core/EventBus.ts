type EventCallback = (...args: unknown[]) => void;

export class EventBus {

    private events = new Map<string, EventCallback[]>();

    public on(
        event: string,
        callback: EventCallback
    ): void {

        const callbacks =
            this.events.get(event) ?? [];

        callbacks.push(callback);

        this.events.set(event, callbacks);
    }

    public emit(
        event: string,
        ...args: unknown[]
    ): void {

        const callbacks =
            this.events.get(event);

        if (!callbacks) return;

        callbacks.forEach(cb => cb(...args));
    }
}