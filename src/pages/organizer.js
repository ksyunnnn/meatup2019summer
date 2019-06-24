import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/molecules/header';

// import twkoba from '//pbs.twimg.com/profile_images/1079641419537539072/EAFhOhhP_400x400.jpg';


const Wrapper = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  text-align: center;
  h1 {
    margin-bottom: 24px;
    font-size: 40px;
  }
  h2{
    font-size: 28px;
    margin: 70px auto 27px;
  }
  p {
    margin: 1.7em 0;
    font-size: 14px;
  }
  .member-list{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .member{
    width: 120px;
    height: 100%;
    margin: 30px;
    .tw-icon{
      width: 120px;
      height: 120px;
      border-radius: 50%
    }
    .tw-name{
      font-size: 16px;
    }
  }
`;

const OrganizerPage = () => (
  <Layout>
    <SEO title="ORGANIZER" />
    <Header />
    <Wrapper>
      <div>
        <h1>ORGANIZER</h1>
        <div>
          <h2>主催</h2>
          <div className="member-list">
            <a href="https://twitter.com/ksyunnnn" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/1079641419537539072/EAFhOhhP_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">こばしゅん</span>
            </a>
          </div>
          <h2>クリエイティブ全般</h2>
          <div className="member-list">
            <a href="https://twitter.com/nanammeon" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/1138796222737555456/cMaB3a0b_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@nanammeon</span>
            </a>
            <a href="https://twitter.com/nuxt_suco" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/1126390239163867136/JhzvYflS_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@nuxt_suco</span>
            </a>
            <a href="https://twitter.com/wwweric" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/1122458005440581632/lyLsNEpe_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@wwweric</span>
            </a>
            <a href="https://twitter.com/9almondchocola" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/1139238479475306496/YAG6i9pW_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@9almondchocola</span>
            </a>
          </div>
          <h2>お肉企画(絶賛協議中)</h2>
          <div className="member-list">
            <a href="https://twitter.com/yuuki_script" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/908967858952011776/GYzBt9Zb_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@yuuki_script</span>
            </a>
            <a href="https://twitter.com/murokaco" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/1013764005565947905/QrDs975v_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@murokaco</span>
            </a>
            <a href="https://twitter.com/nerd0geek1" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/993079752536686592/tiPBPuJc_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@nerd0geek1</span>
            </a>
            <a href="https://twitter.com/nuxt_suco" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/1126390239163867136/JhzvYflS_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@nuxt_suco</span>
            </a>
          </div>
          <h2>当日施策(絶賛協議中)</h2>
          <div className="member-list">
            <a href="https://twitter.com/wwweric" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/1122458005440581632/lyLsNEpe_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@wwweric</span>
            </a>
            <a href="https://twitter.com/nuxt_suco" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/1126390239163867136/JhzvYflS_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@nuxt_suco</span>
            </a>
            <a href="https://twitter.com/akatsuki174" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/902547871597174785/5N8hqo2H_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@murokaco</span>
            </a>
          </div>
          <h2>企画アイディア/当日運営</h2>
          <div className="member-list">
            <a href="https://twitter.com/biccur_gama" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/1126858478507548673/-BawCMbl_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@biccur_gama</span>
            </a>
            <a href="https://twitter.com/zwzwzw0" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/1112048244937285632/CYbgdghF_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@zwzwzw0</span>
            </a>
            <a href="https://twitter.com/musume00000" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/815505878921060353/pz13ciGj_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@musume00000</span>
            </a>
            <a href="https://twitter.com/tsugu_maru_san" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/1017250947943288833/nWv0pOVM_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@tsugu_maru_san</span>
            </a>
          </div>
          <h2>小料理</h2>
          <div className="member-list">
            <a href="https://twitter.com/naoki_ffc_96" target="_blank" rel="noopener noreferrer" className="member">
              <img src="https://pbs.twimg.com/profile_images/1080132242586791941/I0kIosFa_400x400.jpg" alt="icon" className="tw-icon" />
              <span className="tw-name">@naoki_ffc_96</span>
            </a>
          </div>
          <br />
          <p>
          弊実行委員は、肉料理が食べたいために集まった団体です。
          既存の団体や企業などとの関係はとくにはありません。お肉を食べましょう！
          </p>
        </div>
        <p>
          <br />
          <Link to="/">戻る</Link>
        </p>

      </div>
    </Wrapper>
  </Layout>
);

export default OrganizerPage;
