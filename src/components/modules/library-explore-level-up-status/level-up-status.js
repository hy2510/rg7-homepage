import style from "./level-up-status.module.scss";
import Image from "next/image";
import { ProgressBar } from "@/components/common/common-components";

// 학습메인 > 사용자의 학습레벨의 레벨업 상태
export const LevelUpStatus = ({ isLevelPk, studyLevel, progress }) => {
  return (
    <div className={style.level_up_status}>
      <div className={style.level_up_status_container}>
        <div className={style.row_a}>
          {isLevelPk ? (
            <div className={style.dropdown}>
              <div className={style.txt_d}>{studyLevel} 학습</div>
              <Image
                alt=""
                src="/src/images/arrow-icons/chv_down.svg"
                width={20}
                height={20}
              />
            </div>
          ) : (
            <>
              <div className={style.txt_h}>학습 레벨</div>
              <div className={style.txt_d}>{studyLevel}</div>
            </>
          )}
        </div>
        <div className={style.row_b}>
          <SetStudyMode />
        </div>
      </div>
      <ProgressBar width={progress} check="100%" toolTip="Level Up" />
    </div>
  );
};

// 학습메인 > 학습 설정
const SetStudyMode = () => {
  return (
    <div className={style.set_study_mode}>
      <Image
        alt=""
        src="/src/images//gear-icons/gears_gray.svg"
        width={18}
        height={18}
      />
      <span>학습설정</span>
    </div>
  );
};
