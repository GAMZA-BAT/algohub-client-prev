import { css } from '@emotion/react';

import { ReactNode } from 'react';

import pencil from '@/assets/svgs/ic_pencil.svg';

import MaskIcon from '../icon/MaskIcon';

interface SideContentProps {
  imageSrc: string;
  title: string;
  detail: string;
  description?: string;
  children?: ReactNode;
}

const SideContent = (props: SideContentProps) => {
  return (
    <div css={Container}>
      <MaskIcon width={350} height={350} src={props.imageSrc} isCircle={true} />
      <div css={TitleContainer}>
        <div css={TitleWrapper}>
          <div css={Title}>{props.title}</div>
          <div css={PencilWrapper}>
            <MaskIcon width={28} height={28} src={pencil} />
          </div>
        </div>
        <div css={Detail}>{props.detail}</div>
      </div>
      {props.description && (
        <div css={DescriptionWrapper}>
          <div css={Detail}> {props.description}</div>
          <div css={seperator} />
        </div>
      )}
      {props.children}
    </div>
  );
};

export default SideContent;

const Container = css`
  display: flex;
  flex-direction: column;
  width: 28%;
  gap: 4px;
  padding: 8px;
`;

const TitleContainer = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-top: 16px;
  padding-left: 12px;
`;

const TitleWrapper = css`
  display: flex;
  width: 100%;
`;

const PencilWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
  :hover {
    background-color: #e0e0e0;
  }
`;

const Title = css`
  font-size: 2rem;
  font-weight: 600;
`;

const Detail = css`
  font-size: 1.3rem;
  font-family: 'Pretendard-regular';
  font-weight: 200;
`;

const DescriptionWrapper = css`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 4px;
  padding-left: 12px;
`;

const seperator = css`
  width: 100%;
  border: 1px solid #c2c2c2;
`;