import styled from '@emotion/styled';


export const Searchbar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid rgb(255, 84, 15);
  border-radius: 100px;
  margin: 1rem;
  padding: 7px;
  cursor: pointer;

  & form {
    flex: 1;
  }

  & input {
    display: inherit;
    width: 100%;
    border: none;
    padding-left: 10px;
  }

  & input:focus {
    outline: none;
  }

  & input::placeholder {
    font-family: 'rokaf'
  }
`