import { css } from '@emotion/react';

import { useState } from 'react';

import ProblemBox from '@/pages/groupPage/components/ProblemBox';

import { seperator } from '@/components/@common/SideContent';
import CheckboxIcon from '@/components/icon/CheckboxIcon';

import { Theme } from '@/styles/theme';

const ProblemList = () => {
  const [isUnsolvedOnly, setIsUnsolvedOnly] = useState(false);

  const handleUnsolvedOnlyClick = () => {
    setIsUnsolvedOnly((prev) => !prev);
  };
  return (
    <div css={Wrapper}>
      <section
        css={css`
          display: flex;
          justify-content: space-between;
          padding-right: 20px;
        `}
      >
        <h1 css={Meta}>In Progress</h1>
        <div
          css={css`
            display: flex;
            gap: 10px;
            align-items: center;
          `}
          onClick={handleUnsolvedOnlyClick}
        >
          <p css={GrayFont}>unsolved-only</p>
          <CheckboxIcon isChecked={isUnsolvedOnly} />
        </div>
      </section>
      <hr css={seperator} />
      {/* ProblemList */}
      <h1
        css={[
          Meta,
          css`
            margin-top: 5rem;
          `,
        ]}
      >
        Expired
      </h1>
      <hr css={seperator} />
      <ProblemBox
        level={1}
        title={''}
        duration={''}
        submitCnt={0}
        memberCnt={0}
        accuracy={0}
        isChecked={false}
        isExpired
      />
    </div>
  );
};

export default ProblemList;

const Wrapper = css`
  margin: 20px -20px 0 0;
`;

const Meta = css`
  font-size: 2rem;
  padding-bottom: 15px;
`;

const GrayFont = css`
  font-size: 1.5rem;
  color: ${Theme.color.mediumGray};
`;
