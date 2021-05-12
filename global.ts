declare const imports: {
    ui: {
        calendar: {
            CalendarMessageList: any;
            CalendarEvent: CalendarEvent;
            MESSAGE_ICON_SIZE: any;
            NotificationMessage: any;
            NotificationSection: any;
            SHOW_WEEKDATE_KEY: any;
            EmptyEventSource: any;
            EventSourceBase: any;
            NC_: any;
            DBusEventSource: any;
            Placeholder: any;
            MSECS_IN_DAY: any;
            TimeLabel: any;
            Calendar: any; // Native code
            sameYear: any;
            sameMonth: any;
            sameDay: any;
        };
    };
    misc: {
        extensionUtils: {
            getCurrentExtension(): Extension;
        };
    };
};
declare function log(params: any): void;

class Extension {
    metadata!: {
        name: string;
    };
}

class CalendarEvent {
    constructor(
        public id: any,
        public date: any,
        public end: any,
        public summary: any,
        public allDay: any
    ) {}
}
