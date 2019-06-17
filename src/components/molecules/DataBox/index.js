import styled from 'styled-components';
import { colors } from '../../../helpers/State';

export default styled.div`
    margin: 50px 0;
    position: relative;      
    display: block;
    min-height: 180px;
    width: 300px;
    border: 4px solid #151515;
    background: ${colors.white};
    padding: 24px 0;
    ::before {
    content: "";
    display: inline-block;
    height: 60px;
    width: 60px;
    border-right: 4px solid #151515;
    transform: rotate(45deg);
    background: ${colors.gray};
    position: absolute;
    left: -42px;
    top: -42px;
    }
    ::after {
    content: "";
    display: inline-block;
    height: 60px;
    width: 60px;
    border-left: 4px solid #151515;
    transform: rotate(45deg);
    background: ${colors.gray};
    position: absolute;
    right: -42px;
    bottom: -42px;
    }
`;
