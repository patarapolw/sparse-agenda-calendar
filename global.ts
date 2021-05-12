declare const imports: {
    ui: {
        calendar: {
            CalendarMessageList: any;
            CalendarEvent: any;
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
            Calendar: any;
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
