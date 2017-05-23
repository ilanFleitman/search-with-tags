/**
 * Created by User on 24.05.2017.
 */
export class Tag {
  private _value: string;
  private _color: string;

  constructor(value: string, color: string) {
    this._value = value;
    this._color = color;
  }


  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }
}
