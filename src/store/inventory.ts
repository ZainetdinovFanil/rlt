import { defineStore } from 'pinia';

interface State {
  grid: ( {faceColor:string,bgColor:string,count:number}| null)[][];
}

export const useGridStore = defineStore('grid', {
  state: (): State => ({
    grid: [
      [{faceColor:'#B8D998',bgColor:'#7FAA65',count:4}, {faceColor:'#D9BB98',bgColor:'#AA9765',count:2}, {faceColor:'#7481ED',bgColor:'#656CAA',count:5}, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ],
  }),
  actions: {
    moveItem(from: { row: number; col: number }, to: { row: number; col: number }) {
        const itemFrom = this.grid[from.row][from.col];
        const itemTo = this.grid[to.row][to.col];

        if (itemFrom !== null && itemTo !== null) {
          // Меняем местами элементы
          this.grid[from.row][from.col] = itemTo;
          this.grid[to.row][to.col] = itemFrom;
        } else if (itemFrom !== null) {
          // Перемещаем элемент, если целевая позиция пуста
          this.grid[from.row][from.col] = null;
          this.grid[to.row][to.col] = itemFrom;
        }
        // Сохраняем состояние в localStorage
        this.saveState();
    },
    removeItem(position: { row: number; col: number }) {
        if (this.grid[position.row][position.col] !== null) {
          this.grid[position.row][position.col] = null;
          // Сохраняем состояние в localStorage
          this.saveState();
        }
    },
    changeItemCount(position: { row: number; col: number }, newCount: number) {
        console.log(position,newCount);
        
        const item = this.grid[position.row][position.col];
        console.log(item);
        
        if (item !== null && typeof item.count === 'number') {
          item.count = newCount;
          // Сохраняем состояние в localStorage
          this.saveState();
        }
    },
    saveState() {
        localStorage.setItem('gridState', JSON.stringify(this.grid));
    },
    loadState() {
        const savedState = localStorage.getItem('gridState');
        if (savedState) {
          this.grid = JSON.parse(savedState);
        }
    },
  },
});
