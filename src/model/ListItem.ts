export interface Item {
  id: string,
  item: string,
  checked: boolean
}

export default class ListItem implements Item {
  private _id;
  private _item;
  private _checked;
  constructor(id: string = '', item: string = '', checked: boolean = false) {
    this._id = id,
    this._item = item,
    this._checked = checked
  }

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get item(): string {
    return this._item;
  }

  set item(item: string) {
    this._item = item;
  }

  get checked(): boolean {
    return this._checked;
  }

  set checked(checked: boolean) {
    this._checked = checked;
  }
}

const listItem = new ListItem("1", "Buy milk", false);
console.log(listItem.id); // { id: '1', item: 'Buy milk', checked: false }

// Update the checked property
listItem.id = '2';
console.log(listItem.id); // { id: '1', item: 'Buy milk', checked: true }