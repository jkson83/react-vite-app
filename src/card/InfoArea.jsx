// 카드정보 출력
import { useContext, useState, useEffect } from 'react';
import {CardContext} from './CardContext';
import WritePage from './writePage';
import Button from '../components/Button';

export default function InfoArea() {
  const { list,  selectedId, deleteCard } = useContext(CardContext); //선택된 카드 컴포넌트
  const selectedItem = list.find(item => item.id === selectedId);
  const [mode, setMode] = useState('view'); //'view' || 'write' 상태지정
  const onClose = () => setMode('view');

  useEffect(() => {
  if (selectedId !== null) {
    setMode('view');
    }
  }, [selectedId]); //상태 변화 감지

  console.log('mode=',mode);

  //입력
  if (mode === 'write') {
    return (
      <WritePage
        initialData={null}
        onClose={onClose}
      />
    );
  }

  //수정
  if (mode === 'edit' && selectedItem) {
    return (
      <WritePage
        initialData={selectedItem}
        onClose={onClose}
      />
    );
  }

//  const onClose = () => { onClose(); };

  return(
    <div className="info-area">
      <div className="btn-area">
        <Button action="write" onAction={() => setMode('write')} />
        {selectedItem && (
          <>
            <Button action="edit" onAction={() => setMode('edit')} />
            <Button action="delete" onAction = {() => deleteCard(selectedId)} />
          </>
        )}
      </div>
      <hr />
      {selectedItem ? (
        <ul>
          <li>사진이름 : {selectedItem.name}</li>
          <li>파일명 : {selectedItem.src}</li>
          <li>좋아요 : {selectedItem.like ? '♥' : '♡'}</li>
        </ul>
      ) : (
        <p>카드를 선택하세요.</p>
      )}
    </div>
  );
};