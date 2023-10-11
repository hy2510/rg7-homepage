import styles from "./book-list.module.scss";
import {
  AlertBar,
  FilterContainer,
  FilterItem,
} from "@/components/common/common-components";

const style = styles;

// 학습메인 > 사용자의 학습레벨의 도서 리스트
export function BookList({ children }) {
  return (
    <div className={style.book_list}>
      <div className={style.row_a}>
        <div className={style.row_a_container}>
          <div className={style.txt_h}>학습 목록</div>
          <div className={style.completed_status}>
            <div className={style.txt_l1}>155</div>
            <div className={style.txt_l2}>/155</div>
          </div>
        </div>
        <FilterContainer>
          <FilterItem>미완료 학습</FilterItem>
          <FilterItem>기본 정렬</FilterItem>
          <FilterItem>Fiction</FilterItem>
        </FilterContainer>
      </div>
      <AlertBar>
        마음에 드는 책을 골라 보세요! 스토리를 읽고 학습할 수 있어요!
      </AlertBar>
      <div className={style.row_b}>{children}</div>
    </div>
  );
}
