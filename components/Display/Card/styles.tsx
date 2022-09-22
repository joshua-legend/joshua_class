import styled from '@emotion/styled';


export const CardLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  cursor: pointer;
`
export const CardImage = styled.div`
  border-radius: 10px;
  margin-bottom: 8px;

  & img {
    width: 100%;
    height: 100px;
    object-fit: contain;
    border-radius: 10px;
  }
`

export const CardHashTags = styled.div`
  display: flex;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: 0px;
  & span{
    margin-right:3px;
  }
`

export const CardDescription = styled.p`
`