import { useContext, useEffect, useState } from 'react';
import { CardContext } from './CardContext';
import Button from '../components/Button';

export default function WritePage({initialData, onClose}){
  //const {addCard} = useContext(CardContext);
  const {saveCard} = useContext(CardContext);

  const [form, setForm]= useState({
    id: null,
    name:'',
    src:'',
    like:false,
  });

  //수정 모드일 경우 form 초기화
  useEffect(() => {
      if (initialData){
        setForm(initialData);
      }
  }, [initialData]);

  const handleChange = (e) => {
      const {name, value} =  e.target;
      setForm(prev => ({
        ...prev, 
        [name]:value}));
  };

  const handleSave = () => {
      saveCard(form);
      onClose();
  }

  // const handleSubmit = () => {
  //     addCard({
  //         ...form,
  //         id:Date.now(),
  //     });
  //     onClose(); //다시 InfoArea로..
  // }
  return(
    <div className="write-area">
      <h2>{form.id ? '정보 수정' : '정보 입력'}</h2>
      <dl>
        <dt>이름 </dt>
        <dd>
          <input type="text" 
          name="name"
          value={form.name}
          onChange={handleChange}/>
        </dd>
      </dl>
      <dl>
        <dt>이미지경로</dt>
        <dd>
          <input type="text" 
          name="src" 
          value={form.src} 
            onChange={handleChange} />
          <span className="help-text">/image/animal-a.png~animal-i.png 사이에서만 선택가능</span>
        </dd>
      </dl>
      <div className="btn-area">
        <Button action={form.id ? "edit" : "save"} onAction={handleSave} />
        <Button action="cancel" onAction={onClose} />
      </div>
    </div>
  );
}
