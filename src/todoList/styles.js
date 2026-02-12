import styled from "@emotion/styled";

export const TodoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoBox = styled.div`
  width: 620px;
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;
export const Input = {
  Row: styled.div`display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;`,
  Field: styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  `,
  Button: styled.button`
  padding: 10px 24px;  
  background: #6366f1;
  color: white;
  border-radius: 6px;
  border: none;
  cursor: pointer;`,
};

export const Filter = {
  Row: styled.div`
  display: flex;
  flex-direction:row;
  margin-top:15px;
  justify-content:center;
  border-radius:4px;
  `,
  Button: styled.button`
  width: 100px;
  padding: 8px;
  border: none;
  background: ${(props) => (props.active ? "#6366f1" : "#e5e7eb")};
  color: ${(props) => (props.active ? "white" : "#374151")};
  cursor: pointer;
  &:first-of-type {
    border-radius: 6px 0 0 6px;
  }

  &:last-of-type {
    border-radius: 0 6px 6px 0;
  }
  & + & {
    border-left: 1px solid #d1d5db;
  }
  `,
};

export const List = {
  Row: styled.ul`list-style: none;
  padding: 0;
  margin-top: 20px;
  `,
  Item: styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 0;
  border-bottom: 1px solid #eee;`,
  Checkbox: styled.input``,
  Text: styled.span`
  flex: 1;
  text-decoration: ${({ completed }) =>
  completed ? "line-through" : "none"};
  color: ${(props) => (props.completed ? "#9ca3af" : "#111827")};`,
  DeleteButton: styled.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;`,
};

export const Footer = styled.div`
  margin-top: 16px;
  text-align: center;
`;

export const RemainText = styled.span`
  color: #6b7280;
`;