import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement,
  clear(): void,
  render(fullList: FullList): void,
}
//dont forget to make constructor private if you want to make it singleton
export default class ListTemplate implements DOMList {
  
  ul: HTMLUListElement
  static instance: ListTemplate = new ListTemplate();
  private constructor(){
    this.ul = document.getElementById('listItems') as HTMLUListElement
  }

  clear(): void {
    ListTemplate.instance.ul.innerHTML = '';
  }

  render(fullList: FullList): void {
    this.clear()
    fullList.list.forEach(item => {
      const li = document.createElement('li') as HTMLLIElement
      li.className = 'item';

      const input = document.createElement('input') as HTMLInputElement
      input.type = 'checkbox'
      input.id = item.id
      input.checked = item.checked
      li.append(input)

      input.addEventListener('change', () => {
        item.checked = !item.checked
        fullList.save();
      })

      const label = document.createElement('label') as HTMLLabelElement
      label.htmlFor = item.id
      label.textContent = item.item
      li.append(label)

      const button = document.createElement('button') as HTMLButtonElement
      button.className = 'button'
      button.textContent = 'X'
      li.append(button)

      button.addEventListener('click', () => {
        fullList.removeItem(item.id)
        this.render(fullList)
      })

      this.ul.append(li)
    })
  }


}