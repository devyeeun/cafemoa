import { useState } from "react";
import Text from "../../commons/text/01/Text01.index";
import Tag from "../../commons/text/02/Text02.index";
import * as S from "./Slider.Styles";

export default function SlickSlider() {
  const [activeIdx, setActiveIdx] = useState(0);
  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div>
      <S.StyledSlider {...settings} afterChange={(idx) => setActiveIdx(idx)}>
        <S.SlideWrapper isActive={activeIdx === 5}>
          {/* {data.fetchCafe.images.map((el,idx) => (
                <S.SlideWrapper isActive={activeIdx === idx}>
                <S.CafeImage><img src= {el} /></S.CafeImage>
                <S.CafeContent>샬라샬라샬라</S.CafeContent>
            </S.SlideWrapper>
            ))} */}
          <S.CafeImage>
            <img src="/images/cafelist/Cafe1.jpeg" />
          </S.CafeImage>
          <S.CafeContent>
            <span style={{ marginLeft: 0 }}>
              <Tag size="md">태그</Tag>
            </span>
            <span style={{ marginLeft: 30 }}>
              <Tag size="md">태그</Tag>
            </span>
            <span style={{ marginLeft: 30 }}>
              <Tag size="md">태그</Tag>
            </span>
          </S.CafeContent>
          <S.CafeContent>
            <div style={{ marginTop: 30, marginLeft: 0 }}>
              <Text size="32" weight="500">
                코캠다방
              </Text>
            </div>
          </S.CafeContent>
        </S.SlideWrapper>
        <S.SlideWrapper isActive={activeIdx === 0}>
          <S.CafeImage>
            <img src="/images/cafelist/Cafe2.jpeg" />
          </S.CafeImage>
          <S.CafeContent>
            <span style={{ marginLeft: 30 }}>
              <Tag size="md">태그</Tag>
            </span>
            <span style={{ marginLeft: 30 }}>
              <Tag size="md">태그</Tag>
            </span>
            <span style={{ marginLeft: 30 }}>
              <Tag size="md">태그</Tag>
            </span>
          </S.CafeContent>
          <S.CafeContent>
            <div style={{ marginTop: 30, marginLeft: 0 }}>
              <Text size="32" weight="500">
                스타벅스
              </Text>
            </div>
          </S.CafeContent>
        </S.SlideWrapper>
        <S.SlideWrapper isActive={activeIdx === 1}>
          <S.CafeImage>
            <img src="/images/cafelist/Cafe3.jpeg" />
          </S.CafeImage>
          <S.CafeContent>
            <span style={{ marginLeft: 0 }}>
              <Tag size="md">태그</Tag>
            </span>
            <span style={{ marginLeft: 30 }}>
              <Tag size="md">태그</Tag>
            </span>
            <span style={{ marginLeft: 30 }}>
              <Tag size="md">태그</Tag>
            </span>
          </S.CafeContent>
          <S.CafeContent>
            <div style={{ marginTop: 30, marginLeft: 0 }}>
              <Text size="32" weight="500">
                투썸플레이스
              </Text>
            </div>
          </S.CafeContent>
        </S.SlideWrapper>
        <S.SlideWrapper isActive={activeIdx === 2}>
          <S.CafeImage>
            <img src="/images/cafelist/Cafe1.jpeg" />
          </S.CafeImage>
          <S.CafeContent>
            <span style={{ marginLeft: 0 }}>
              <Tag size="md">태그</Tag>
            </span>
            <span style={{ marginLeft: 30 }}>
              <Tag size="md">태그</Tag>
            </span>
            <span style={{ marginLeft: 30 }}>
              <Tag size="md">태그</Tag>
            </span>
          </S.CafeContent>
          <S.CafeContent>
            <div style={{ marginTop: 30, marginLeft: 0 }}>
              <Text size="32" weight="500">
                커피빈
              </Text>
            </div>
          </S.CafeContent>
        </S.SlideWrapper>
        <S.SlideWrapper isActive={activeIdx === 3}>
          <S.CafeImage>
            <img src="/images/cafelist/Cafe1.jpeg" />
          </S.CafeImage>
          <S.CafeContent>
            <span style={{ marginLeft: 0 }}>
              <Tag size="md">태그</Tag>
            </span>
            <span style={{ marginLeft: 30 }}>
              <Tag size="md">태그</Tag>
            </span>
            <span style={{ marginLeft: 30 }}>
              <Tag size="md">태그</Tag>
            </span>
          </S.CafeContent>
          <S.CafeContent>
            <div style={{ marginTop: 30, marginLeft: 0 }}>
              <Text size="32" weight="500">
                빽다방
              </Text>
            </div>
          </S.CafeContent>
        </S.SlideWrapper>
        <S.SlideWrapper isActive={activeIdx === 4}>
          <S.CafeImage>
            <img src="/images/cafelist/Cafe1.jpeg" />
          </S.CafeImage>
          <S.CafeContent>
            <span style={{ marginLeft: 0 }}>
              <Tag size="md">태그</Tag>
            </span>
            <span style={{ marginLeft: 30 }}>
              <Tag size="md">태그</Tag>
            </span>
            <span style={{ marginLeft: 30 }}>
              <Tag size="md">태그</Tag>
            </span>
          </S.CafeContent>
          <S.CafeContent>
            <div style={{ marginTop: 30, marginLeft: 0 }}>
              <Text size="32" weight="500">
                메가커피
              </Text>
            </div>
          </S.CafeContent>
        </S.SlideWrapper>
      </S.StyledSlider>
    </div>
  );
}