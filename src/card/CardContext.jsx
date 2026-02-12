import { createContext, useState} from "react";
export const CardContext = createContext(null);

export function CardProvider({children, initialList}){

  const [list, setList] = useState(initialList); //가져올 데이타리스트를 처리함.
  const [selectedId, setSelectedId] = useState(null); //선택된 데이타을 처리함.
  //카드선택
  const handleSelect = (id) => {
    setSelectedId(id);
  };

  //좋아요 토글
  const toggleLike = (id) => {
    setList(prev => 
        prev.map(item =>
        item.id === id ? {...item,  like:!item.like} : item ) 
    );
      
    //InfoAarea 컴포넌트값도 변경
    setSelectedId(prev => 
      prev && prev.id === id ? {...prev, like:!prev.like} : prev 
    );
  }

 //저장 (입력+수정 동시 처리)
  const saveCard = (card) => {
    setList(prev => {
      //수정
      if(card.id){
        return prev.map(item => 
          item.id === card.id ? card : item
        );
      }

      //입력
      return [
        ...prev, {...card, id: Date.now() }
      ];
    });
  }

  //삭제
  const deleteCard = (id) =>{
    setList(prev => prev.filter(item => item.id !== id));
    setSelectedId(null);
  };

  return(
    <CardContext.Provider 
    value={{list,
      selectedId, 
      handleSelect, 
      toggleLike,
      // addCard,
      // updateCard,
      saveCard,
      deleteCard,
      }}>
      {children}
    </CardContext.Provider>
  );
} 