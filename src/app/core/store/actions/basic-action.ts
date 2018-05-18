export class BasicAction {
    private _type: string;
    private _value: any;

    constructor(type: string, value: any) {
        this._type = type;
        this._value = value;
    }

    get type(): string {
        return this._type;
    }

    get value(): any {
        return this._value;
    }
}
