import varsCss from 'components/commonCss/varsCss';
import styled from 'styled-components';
import h_mob from 'assets/bg_images/bg_header_home_mob.webp';
import l_mob from 'assets/bg_images/bg_header_library_mob.webp';
import h_tab from 'assets/bg_images/bg_header_home_tablet.webp';
import l_tab from 'assets/bg_images/bg_header_library_tablet.webp';
import h_desk from 'assets/bg_images/bg_header_home_desktop.webp';
import l_desk from 'assets/bg_images/bg_header_library_desktop.webp';

export const HeaderSection = styled.header`
  min-height: 230px;
  padding: 45px 0;
  background: ${varsCss.textSecondary};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${props => (props.location ? l_mob : h_mob)});

  @media screen and (min-width: ${varsCss.tablet}px) {
    padding: 45px 0 60px;
    background-image: url(${props => (props.location ? l_tab : h_tab)});
  }

  @media screen and (min-width: ${varsCss.desktop}px) {
    background-image: url(${props => (props.location ? l_desk : h_desk)});
  }
`;

export const Container = styled.div`
  display: grid;
  margin: 0 auto;
  width: 280px;

  @media screen and (min-width: ${varsCss.tablet}px) {
    width: 618px;
  }

  @media screen and (min-width: ${varsCss.desktop}px) {
    width: 882px;
  }
`;
