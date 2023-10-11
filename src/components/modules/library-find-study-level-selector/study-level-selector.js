import {
  Dropdown,
  FilterContainer,
  FilterItem,
} from "@/components/common/common-components";
import styles from "./study-level-selector.module.scss";

const style = styles;

export function StudyLevelSelector() {
  return (
    <div className={style.study_level_selector}>
      <Dropdown title="Level KA" />
      <FilterContainer>
        <FilterItem>미완료 학습</FilterItem>
        <FilterItem>기본 정렬</FilterItem>
        <FilterItem>Fiction</FilterItem>
      </FilterContainer>
    </div>
  );
}
