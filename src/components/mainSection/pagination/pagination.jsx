import { ReactComponent as ArrowLeft } from './icons/arrow_left.svg';
import { ReactComponent as ArrowRight } from './icons/arrow_right.svg';
// import { ReactComponent as Elipsis } from './icons/elipsis.svg';
import {
  Pagination,
  NavBtn,
  PagesQty,
  Page,
  PageBtn,
} from './pagination.styled';

function Pages() {
  return (
    <Pagination>
      <NavBtn>
        <ArrowLeft />
      </NavBtn>
      <PagesQty>
        <Page>
          <PageBtn>1</PageBtn>
        </Page>
        <Page>
          <PageBtn>2</PageBtn>
        </Page>
        <Page>
          <PageBtn>3</PageBtn>
        </Page>
        <Page>
          <PageBtn>4</PageBtn>
        </Page>
        <Page>
          <PageBtn>5</PageBtn>
        </Page>
      </PagesQty>
      <NavBtn>
        <ArrowRight />
      </NavBtn>
    </Pagination>
  );

  // <Pagination
  //   total={1000}
  //   pageSize={20}
  //   totalBoundaryShowSizeChanger={5}
  //   hideOnSinglePage={true}
  //   showTitle={false}
  //   style={style}
  //   prevIcon={<ArrowLeft />}
  //   nextIcon={<ArrowRight />}
  //   jumpPrevIcon={<Elipsis />}
  //   jumpNextIcon={<Elipsis />}
  // />
}

export default Pages;
