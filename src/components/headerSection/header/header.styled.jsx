import styled from 'styled-components';
import bg_home_mob from './bg_images/bg_header_home_mob.png';
import bg_lib_mob from './bg_images/bg_header_library_mob.png';
import bg_home_tablet from './bg_images/bg_header_home_tablet.png';
import bg_lib_tablet from './bg_images/bg_header_library_tablet.png';
import bg_home_desktop from './bg_images/bg_header_home_desktop.png';
import bg_lib_desktop from './bg_images/bg_header_library_desktop.png';

export const HeadHome = styled.header`
  min-height: 230px;
  padding: 45px 0;
  background-image: url(${bg_home_mob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    padding: 45px 0 60px;
    background-image: url(${bg_home_tablet});
  }

  @media screen and (min-width: 1024px) {
    padding: 45px 0 60px;
    background-image: url(${bg_home_desktop});
  } ;
`;

export const HeadLibrary = styled.header`
  min-height: 230px;
  padding: 45px 0;
  background-image: url(${bg_lib_mob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-width: 768px) {
    padding: 45px 0 60px;
    background-image: url(${bg_lib_tablet});
  }

  @media screen and (min-width: 1024px) {
    padding: 45px 0 60px;
    background-image: url(${bg_lib_desktop});
  } ;
`;

export const Container = styled.div`
  display: grid;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 618px;
  }

  @media screen and (min-width: 1024px) {
    width: 882px;
  }
`;
