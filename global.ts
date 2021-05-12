declare const imports: {
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
