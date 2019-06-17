import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';

const Wrapper = styled.form`
    display: grid;
    row-gap: 24px;
    li {
    list-style: none;
    display: grid;
    row-gap: 16px;
    }
`;

const Label = styled.label`
    font-weight: 800;
    font-size: 16px;
    line-height: 30px;
`;

const Input = styled.input`
    background: #F1F1F1;
    border-radius: 3px;
    border: 0;
    height: 50px;
    padding: 8px;
    font-weight: 500;
    font-size: 14px;
    :focus {
        background: #fff;
        outline-width: medium;
        outline-color: #FF6500;
    }
`;

const SelectableInput = ({
  children, id, name, className,
}) => {
  const InputWrapper = styled.label`
    input {
        display: none;
    }
    input:checked + span {
        background: #eee;
    }
  `;
  return (
    <InputWrapper className={className} htmlFor={id}>
      <input type="radio" id={id} name={name} />
      <span>{children}</span>
    </InputWrapper>
  );
};

const GenderButton = styled(SelectableInput)`
    span {
        display: inline-block;
        width: 140px;
        height: 56px;
        /* background: #F1F1F1; */
        border: 1px solid #EFEFEF;
        border-radius: 4px;
    }
    input {
        display: inherit;
    }
    input:checked + span {
        /* background: red!important; */
    }
`;

export default props => (
  <Wrapper>
    <li>
      <Label>お名前</Label>
      <Input placeholder="例: こばしゅん" />
    </li>
    <li>
      <Label>連絡先アカウント</Label>
      <Input placeholder="ksyunnnn" />
    </li>
    <li>
      <Label>性別</Label>
      <GenderButton id="otoko" name="gender">おとこ</GenderButton>
      <GenderButton id="onnna" name="gender">おんな</GenderButton>
    </li>
  </Wrapper>
);
