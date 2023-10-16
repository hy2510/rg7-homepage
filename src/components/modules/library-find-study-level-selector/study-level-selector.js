import { Dropdown } from "@/components/common/common-components";
import style from "./study-level-selector.module.scss";
import { SetFilter } from "../library-set-fliter/set-fliter";

export function StudyLevelSelector() {
  return (
    <div className={style.study_level_selector}>
      <Dropdown title="Level KA" />
      <SetFilter />
    </div>
  );
}
