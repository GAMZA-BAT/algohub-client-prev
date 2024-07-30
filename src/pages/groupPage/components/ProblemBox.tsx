import { css } from '@emotion/react';

import LevelIcon from '@/components/@common/LevelIcon';

import CheckBoxIc from '@/assets/svgs/ic_check_box.svg?react';
import XmarkBoxIc from '@/assets/svgs/ic_xmark_box.svg?react';

import { Theme } from '@/styles/theme';

interface problemBoxPropType {
  level: number;
  title: string;
  duration: string;
  submitCnt: number;
  memberCnt: number;
  accuracy: number;
  isChecked: boolean;
  isExpired?: boolean;
}
const ProblemBox = ({
  level,
  title,
  duration,
  submitCnt,
  memberCnt,
  accuracy,
  isChecked,
  isExpired = false,
}: problemBoxPropType) => {
  return (
    <div css={Wrapper}>
      <section css={MetaContainer}>
        <LevelIcon level={level} />
        <div css={Twoline}>
          <h2>{title}</h2>
          <p css={DurationStyle}>{duration}</p>
        </div>
      </section>
      <section css={DetailContainer}>
        <div
          css={[
            Twoline,
            css`
              align-items: center;
            `,
          ]}
        >
          <h3>solved</h3>
          <p css={SubStyle}>
            {submitCnt}/{memberCnt}
          </p>
        </div>
        <div
          css={[
            Twoline,
            css`
              align-items: center;
            `,
          ]}
        >
          <h3>accurancy</h3>
          <p css={SubStyle}>{accuracy}%</p>
        </div>
        {isExpired ? (
          <XmarkBoxIc width={'40px'} height={'40px'} fill={'#d2001a'} />
        ) : (
          <CheckBoxIc
            width={'40px'}
            height={'40px'}
            fill={isChecked ? Theme.color.darkgray : Theme.color.lowLightGray}
          />
        )}
      </section>
    </div>
  );
};

export default ProblemBox;

const Wrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 20px;

  border-bottom: 1px solid lightgray;
`;

const MetaContainer = css`
  display: flex;
  gap: 20px;
`;

const DurationStyle = css`
  font-family: 'Pretendard-regular';
  font-weight: 200;
`;

const SubStyle = css`
  font-family: 'Pretendard-regular';
  font-weight: 200;

  color: gray;
`;

const Twoline = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DetailContainer = css`
  display: flex;
  gap: 30px;

  align-items: center;
`;
