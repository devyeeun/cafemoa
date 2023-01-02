import styled from "@emotion/styled";

export const CardImgWrap = styled.div`
  position: relative;
  > img {
    width: 100%;
  }
`;
export const CardInfoWrap = styled.div`
  padding: 24px 24px 48px;

  @media screen and (max-width: 1024px) {
    padding: 16px 16px 32px;
  }
`;
export const CardWrapper = styled.div`
  width: 100%;
  border: 1px solid #000000;
`;
