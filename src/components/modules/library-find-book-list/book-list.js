import styles from "./book-list.module.scss";
import {
  AlertBar,
  Dropdown,
  DropdownItem,
  FilterContainer,
  FilterItem,
} from "@/components/common/common-components";

const style = styles;

// 학습메인 > 사용자의 학습레벨의 도서 리스트
export function BookList({ count, children }) {
  return (
    <div className="flex dir-col gap-m">
      <div className={style.book_counter}>
        <div className={style.book_counter_container}>
          <Dropdown title={`총 ${count}권`}>
            <DropdownItem>목록 다운로드</DropdownItem>
          </Dropdown>
        </div>
        <div className={style.edit}>편집</div>
      </div>
      <div className={style.book_list}>
        <div className={style.row_b}>{children}</div>
      </div>
    </div>
  );
}
