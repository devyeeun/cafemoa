import HeroWrap from "../../../common/hero/HeroWrap.index";
import Text from "../../../common/text/01/Text01.index";
import MyCouponInvalid from "./MyCoupon-invalid";
import MyCouponValid from "./MyCoupon-valid";
import * as S from "./MyCoupon.styles";

export default function MyCoupon() {
  return (
    <>
      <HeroWrap
        imageUrl="/images/review/review_hero01.png"
        title="마이모아"
        subject="마이페이지 마이페이지 마이페이지"
      ></HeroWrap>
      <S.ContainerWrapper>
        <S.Container>
          <S.TitleWrapper>
            <Text size="36" weight="500">
              쿠폰을 모아보세요!
            </Text>
          </S.TitleWrapper>

          <S.TapWrap
            defaultActiveKey="1"
            items={[
              {
                label: "사용가능 쿠폰",
                key: "1",
                children: <MyCouponValid />,
              },
              {
                label: "사용완료 쿠폰",
                key: "2",
                children: <MyCouponInvalid />,
              },
            ]}
          />
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
}
