import { useForm } from "react-hook-form";
import Text from "../../commons/text/01/Text01.index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./SignupCafeInfo.styles";
import { SignUpCafeInfoSchema } from "./SignupCafeInfo.validation";
import { useState } from "react";
import { Modal } from "antd";
import { IQuery } from "../../../commons/types/generated/types";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import Input02 from "../../commons/input/02/Input02.index";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";
import { v4 as uuidv4 } from "uuid";
import CafeInformMenuImage from "./imageupload/menu/SignupCafeInfoMenuImage.index";
import { TAG_VALUES } from "../../../commons/default/default";
import Tag from "../../commons/text/02/Text02.index";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

interface ISignUpCafeInfoProps {
  data?: Pick<IQuery, "fetchCafeInform">;
}

export default function SignUpCafeInfo(props: ISignUpCafeInfoProps) {
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectTag, setSelectTag] = useState<string[]>([]);

  const onChangeFileUrls = (fileUrl: string, index: number) => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const { register, handleSubmit, watch, setValue, formState } = useForm({
    resolver: yupResolver(SignUpCafeInfoSchema),
    mode: "onChange",
    defaultValues: {
      brandName: "",
      cafeAddr: "",
      detailAddr: "",
      cafeinfo: "",
      operatingInfo: "",
      cafeTag: ["", "", ""],
      cafeImage: ["", "", ""],
      cafeMenuImage: ["", "", ""],
    },
  });

  // prettier-ignore
  const modules = {
    toolbar:[
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
          [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
          ['image', 'video'],
          ['clean']  
        ],
  };

  const onSignUpSubmit = async (data) => {
    setValue("cafeImage", fileUrls);
    const results = await Promise.all(
      files.map(async (file) => await uploadFile({ variables: { file } }))
    );
    const resultUrls = results.map((el) =>
      el !== undefined ? el.data?.uploadFile.url : ""
    );
    setValue("images", resultUrls);
    if (!props.isEdit) {
      void createSubmit(data, resultUrls);
    } else {
      void updateSubmit(props.useditemId, data, resultUrls);
    }
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleComplete = (data: Address) => {
    setValue("cafeAddr", data.address);
    toggleModal();
  };
  const onClickTag = (value: string) => () => {
    const tagArr = selectTag;
    const _tempTag = tagArr.filter((el) => el.includes(value));
    if (_tempTag.length === 1) {
      const idx = tagArr.indexOf(value);
      tagArr.splice(idx, 1);
      setSelectTag([...tagArr]);
      return;
    }
    if (tagArr.length >= 3) {
      tagArr.shift();
    }
    tagArr.push(value);
    setSelectTag([...tagArr]);
    setValue("cafeTag", selectTag);
  };
  console.log(selectTag);
  // useEffect(() => {
  //   onSelectLocation(selectValue);
  //   onRefetchCafes(selectTag);
  // }, [selectValue, selectTag]);
  return (
    <>
      <S.ContainerWrapper onSubmit={handleSubmit(onSignUpSubmit)}>
        <S.ContainerInner>
          <S.TitleWrap>
            <Text size="32" fontColor="subColor01">
              카페정보 입력
            </Text>
          </S.TitleWrap>
          <S.InputWrap>
            <Input02
              type="text"
              name="카페 상호명"
              register={register("brandName")}
            />
          </S.InputWrap>
          <S.InputWrap>
            <Input02
              type="text"
              name="주소"
              register={register("cafeAddr")}
              isValid={watch("cafeAddr").length !== 0}
              readOnly={true}
            />
            <S.AddrBtn type="button" color="beige" onClick={toggleModal}>
              <Text size="16">주소 검색</Text>
            </S.AddrBtn>
          </S.InputWrap>
          <S.InputWrap>
            <Input02
              type="text"
              name="상세 주소"
              errorMsg={formState.errors.detailAddr?.message}
              register={register("detailAddr")}
            />
          </S.InputWrap>
          <S.ContentsTitleWrap>
            <Text size="20" fontColor="subColor01">
              카페 태그선택
            </Text>
          </S.ContentsTitleWrap>
          <S.TagsWrap style={{ marginBottom: "40px" }}>
            {TAG_VALUES.map((el) => (
              <button key={uuidv4()} onClick={onClickTag(el)}>
                <Tag size="md" isActive={selectTag.includes(el)}>
                  {el}
                </Tag>
              </button>
            ))}
          </S.TagsWrap>
          <S.ContentsTitleWrap>
            <Text size="20" fontColor="subColor01">
              카페 소개
            </Text>
          </S.ContentsTitleWrap>
          <div style={{ padding: "40px 0px", paddingBottom: "60px" }}>
            <ReactQuill
              style={{
                width: "100%",
                height: "300px",
              }}
              modules={modules}
              defaultValue={props.data?.fetchCafeInform.cafeinfo}
            />
          </div>
          <S.ContentsTitleWrap>
            <Text size="20" fontColor="subColor01">
              운영시간 및 휴무일
            </Text>
          </S.ContentsTitleWrap>
          <div style={{ padding: "40px 0px", paddingBottom: "60px" }}>
            <ReactQuill
              style={{
                width: "100%",
                height: "300px",
              }}
              modules={modules}
              defaultValue={props.data?.fetchCafeInform.operatingInfo}
            />
          </div>
          <S.ContentsTitleWrap>
            <Text size="20" fontColor="subColor01">
              메뉴 이미지
            </Text>
          </S.ContentsTitleWrap>
          <S.ImageWrapper>
            {fileUrls.map((el, index) => (
              <CafeInformMenuImage
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={onChangeFileUrls}
              />
            ))}
          </S.ImageWrapper>
          {/* <TempCafeInfoMenuImages /> */}
          <S.ContentsTitleWrap>
            <Text size="20" fontColor="subColor01">
              카페 사진
            </Text>
          </S.ContentsTitleWrap>
          <S.CafeImageContainer>
            <S.CafeImageWrap>
              <img src="/images/cafelist/Cafe3.jpeg" />
            </S.CafeImageWrap>
            <S.CafeImageWrap>
              <img src="/images/cafelist/Cafe3.jpeg" />
            </S.CafeImageWrap>
            <S.CafeImageWrap>
              <img src="/images/cafelist/Cafe3.jpeg" />
            </S.CafeImageWrap>
            <S.CafeImageWrap>
              <img src="/images/cafelist/Cafe3.jpeg" />
            </S.CafeImageWrap>
          </S.CafeImageContainer>
          <S.SignUpBtnWrap>
            <S.SubmitBtn color="brown">
              <Text size="24" fontColor="white">
                등록
              </Text>
            </S.SubmitBtn>
          </S.SignUpBtnWrap>
        </S.ContainerInner>
      </S.ContainerWrapper>
      {isModalOpen && (
        <Modal
          title="주소 검색"
          open={true}
          onOk={toggleModal}
          onCancel={toggleModal}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
