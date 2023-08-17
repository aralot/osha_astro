import styled from 'styled-components';
import { media } from 'components/ui/theme';

import world from './world.webp';
import sk from './sk.svg';
import gerb from './gerb.svg';

export const Title = styled.div`
  margin-bottom: 40px;
  padding: 0 20px;

  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #0f1c2c;

  ${media.LARGE_TABLET`
    max-width: 821px;
    margin-bottom: 44px;
    padding: unset;
    font-size: 46px;
    line-height: 51px;
    letter-spacing: -0.02em;
  `}
`;

export const Stats = styled.div`
  padding: 60px 0 255px;
  margin: 0 10px 16px;

  border-radius: 16px;
  background: #f5f8fa url('${world}') no-repeat;
  background-position: center calc(100% - 40px);
  background-size: contain;

  ${media.LARGE_TABLET`
    padding: 100px 62px 114px;
    margin: 0 0 20px;


    border-radius: 24px;
    background-position: center right;
  `}
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 30px;
  justify-content: center;

  ${media.LARGE_TABLET`
    display: flex;
    justify-content: unset;
    gap: 50px;
  `}
`;

export const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:nth-child(1) {
    grid-column: 1/-1;
  }

  &:nth-child(2) {
    grid-column: 1;
    grid-row: 2 / -1;
  }

  &:nth-child(3) {
    grid-column: 2;
  }
`;

export const StatsItemCount = styled.div`
  font-size: 56px;
  line-height: 70px;
`;

export const StatsItemLabel = styled.div`
  margin-top: -7px;

  font-size: 20px;
  line-height: 25px;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  padding: 0 10px;

  ${media.LARGE_TABLET`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    margin-bottom: 20px;
    padding: unset;
  `}
`;

export const Card = styled.div`
  padding: 102px 20px 32px;
  border: 1px solid rgba(15, 28, 44, 0.16);
  border-radius: 16px;
  background-image: url('${sk}');
  background-repeat: no-repeat;
  background-size: 62px 62px;
  background-position: 20px 24px;

  ${media.LARGE_TABLET`
    padding: 52px 62px 56px 177px;
    background-position: 50px 56px;
    background-size: 93px 93px;
    border-radius: 24px;
  `}
`;

export const Card2 = styled(Card)`
  padding-top: 111px;
  background-image: url('${gerb}');
  background-position: 20px 24px;
  background-size: 70px 72px;

  ${media.LARGE_TABLET`
    padding: 52px 62px 56px 177px;
    background-position: 50px 47px;
    background-size: 99px 101px;
  `}
`;

export const CardTitle = styled.div`
  margin-bottom: 8px;

  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #0f1c2c;

  ${media.LARGE_TABLET`
    margin-bottom: 4px;

    font-size: 22px;
    line-height: 27px;
  `}
`;

export const CardDescription = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #0f1c2c;

  ${media.LARGE_TABLET`
    line-height: 22px;
    letter-spacing: -0.01em;
  `}
`;

export const Companies = styled.div`
  padding: 28px 20px 32px;
  margin: 0 10px 54px;
  border: 1px solid rgba(15, 28, 44, 0.16);
  border-radius: 16px;

  ${media.LARGE_TABLET`
    display: grid;
    grid-template-columns: 160px auto;
    padding: 48px 50px 56px;
    margin: 0 0 100px;
    border-radius: 24px;
  `}
`;

export const CompaniesTitle = styled.div`
  margin-bottom: 25px;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;

  ${media.LARGE_TABLET`
    margin-bottom: unset;
    font-size: 22px;
    line-height: 29px;
    letter-spacing: -0.02em;
  `}
`;

export const CompaniesGrid = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  ${media.LARGE_TABLET`
    justify-content: space-between;
    flex-wrap: unset;
    gap: unset;
  `};
`;
