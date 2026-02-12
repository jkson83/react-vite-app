import { atom } from "recoil";

//기본 투두리스트 상태
export const todoListState = atom({
  key: "todoListState",
  default: [
    { id: 1, text: "Recoil 공부하기", completed: true },
    { id: 2, text: "Emotion 스타일링", completed: false },
    { id: 3, text: "Todo 앱 완성하기", completed: false },
  ],
});

//필터 상태
export const filterState = atom({
  key: "filterState",
  default: "all", //all, active, completed
});