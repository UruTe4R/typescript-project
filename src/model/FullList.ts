import ListItem from './ListItem'

interface List {
  list: ListItem[],
  load(): void,
  save(): void,
  clearList(): void,
  addItem(itemObJ: ListItem): void,
  removeItem(id: string): void
}

//static property belongs to the class, not the instance so i can do FullList.load() and so on?

export default class FullList implements List {

  static instance: FullList = new FullList()
  private constructor(
    private _list: ListItem[] = []
  ) {

  }

 /*  public static getInstance(): FullList {
    if (!this.instance) {
      this.instance = new FullList()
    }
    return this.instance
  } */

  get list(): ListItem[] {
    return this._list
  }

  set list(list: ListItem[]) {
    this._list = list
  }
/* if i simply parse the JSON object and push it to the list, 
the objects will be just different from the instance of ListItem, which means i cant use methods on ListItem */
  load(): void {
    const storedList: string | null = localStorage.getItem('list')
    if (typeof storedList !== 'string') return

    const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList)
    parsedList.forEach(itemObj => {
      const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
      FullList.instance.addItem(newListItem)
    })
  }

  save(): void {
    localStorage.setItem('list', JSON.stringify(this._list))
  }
  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObJ: ListItem): void {
    this._list.push(itemObJ);
    this.save();
  }

  removeItem(id: string): void {
    const newList =this._list.filter(item => item.id !== id);
    this._list = newList;
    this.save();
  }
}

// export const fullList = FullList.getInstance();