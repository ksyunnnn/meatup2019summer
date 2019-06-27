import React from 'react';
import styled from 'styled-components';
import { Chart } from 'primereact/components/chart/Chart';
import CardStyle from '../../molecules/CardStyle';
import { DataContext } from '../../../helpers/State';
import media from '../../../helpers/MediaQuery';
import SpreadCircle from '../../molecules/SpreadCircle';
import SpreadBar from '../../molecules/SpreadBar';
import CountNumber from '../../molecules/CountNumber';


const UlWrapper = styled.ul`
    display: grid;
    row-gap: 16px;
    column-gap: 16px;
    grid-template-columns: 320px 320px;
    justify-content: center;
    margin-bottom: 100px;
    padding-bottom: 50px;
    ${media.mobile`
      column-gap: none;
      grid-template-columns: none;
    `}
    p.pre {
      font-weight: 900;
      font-size: 20px;
      letter-spacing: 1.46px;
      color: #B1B1B1;
      margin-top: 40px;
    }
`;

const RollWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  flex-flow: wrap;

  padding: 16px 8px;
`;

const PeriodsWrapper = styled.div`
  padding: 24px 16px;
  display: grid;
  grid-row: 8px;
`;

const TotalWrapper = styled.div`
  font-size: 64px;
  padding-top: 16px;
`;

const renderCircles = (rollCounts) => {
  const rt = [];
  Object.keys(rollCounts).forEach((k, i) => rt.push(<SpreadCircle amount={rollCounts[k]}>{k === '' ? '回答なし' : k}</SpreadCircle>));
  return rt;
};

const getPeriodsName = (period) => {
  switch (period) {
    case 'other':
      return '未経験 / 回答なし';
    case 'junior':
      return '1年未満';
    case 'middle':
      return '2年~4年';
    case 'senior':
      return '5年~';

    default:
  }
  return false;
};

const renderBars = (periods) => {
  const rt = [];
  Object.keys(periods).forEach((k, i) => rt.push(<SpreadBar amount={periods[k].length}>{getPeriodsName(k)}</SpreadBar>));
  return rt;
};

export default () => (
  <DataContext.Consumer>
    {
          data => (
            <UlWrapper>
              <li>
                <CardStyle>
                  <h4>参加人数</h4>
                  <TotalWrapper>
                    {data ? <CountNumber amount={data.calc.total} /> : <p className="pre">取得中...</p>}
                  </TotalWrapper>
                </CardStyle>
              </li>
              <li>
                <CardStyle>
                  <h4>男女比</h4>

                  {data ? (
                    <Chart
                      type="pie"
                      data={{
                        labels: ['男性', '女性'],
                        datasets: [
                          {
                            data: [data.calc.men.length, data.calc.women.length],
                            backgroundColor: ['#36A2EB', '#FF6384'],
                            hoverBackgroundColor: ['#36A2EB', '#FF6384'],
                          },
                        ],
                      }}
                    />
                  ) : <p className="pre">取得中...</p>}

                </CardStyle>
              </li>
              <li>
                <CardStyle>
                  <h4>Web歴</h4>
                  <PeriodsWrapper>
                    {data ? (
                      renderBars(data.calc.periods)
                    ) : <p className="pre">取得中...</p>}
                  </PeriodsWrapper>
                </CardStyle>
              </li>
              <li>
                <CardStyle>
                  <h4>職業分布</h4>
                  <RollWrapper>{data ? renderCircles(data.calc.rollCounts) : <p className="pre">取得中...</p>}</RollWrapper>
                </CardStyle>
              </li>
            </UlWrapper>
          )
      }
  </DataContext.Consumer>
);
