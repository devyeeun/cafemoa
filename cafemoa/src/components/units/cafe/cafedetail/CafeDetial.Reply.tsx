import { useCreateOwnerComment } from "../../../commons/hooks/mutations/useCreateOwnerComment";
import Input01 from "../../../commons/input/01/Input01.index";
import Text from "../../../commons/text/01/Text01.index";
import * as S from "./CafeDetail.styles";
import { useForm } from "react-hook-form";

interface IReplyProps {
  commentId: string;
}

export default function ReplyReview(props: IReplyProps) {
  console.log(props.commentId);
  const { createOwnerCommentSubmit } = useCreateOwnerComment();
  const { register, handleSubmit } = useForm({
    // resolver: yupResolver(CreateCommentSchema),
    mode: "onChange",
    defaultValues: {
      content: "",
    },
  });
  const onClickCreateOwnerComment = (data: any) => {
    void createOwnerCommentSubmit(data, props.commentId);
  };
  return (
    <S.ReplyWrap>
      <S.ReplyFormWrapper onSubmit={handleSubmit(onClickCreateOwnerComment)}>
        <S.ReplyInputWrapper>
          <Input01
            placeHolder="20글자 이내로 작성해주세요."
            type="text"
            register={register("content")}
          />
        </S.ReplyInputWrapper>
        <S.ReplySubmitBtn color="brownLine">
          <Text fontColor="subColor01" size="14">
            답글등록
          </Text>
        </S.ReplySubmitBtn>
      </S.ReplyFormWrapper>
    </S.ReplyWrap>
  );
}
