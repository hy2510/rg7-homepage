"use client";

import Image from "next/image";
import style from "./intro-choose-level.module.scss";
import { Button } from "@/components/common/common-components";
import { useState } from "react";

// 단계선택 콘테이너
export function IntroChoodeLevel() {
  const [choosePreK, _choosePreK] = useState(false);
  const [chooseK, _chooseK] = useState(false);
  const [choose1, _choose1] = useState(false);
  const [choose2, _choose2] = useState(false);

  return (
    <div className={style.intro_choose_level}>
      <div
        className={`container compact ${style.intro_choose_level_container}`}
      >
        <div className={style.header}>
          <div className={style.txt_h}>시작할 단계를 선택하세요.</div>
          <div className={style.txt_p}>
            일단 시작해 보세요. 언제든지 변경 가능합니다.
          </div>
        </div>
        <div className={style.body}>
          <IntroChooseItem
            label="PreK"
            title="기초 다지기"
            detail="이제 영어를 배우기 시작한 학생에게 권장"
            symbolImgSrc="/src/images/@intro-choose-level/symbol_img_01.svg"
            onClick={() => {
              choosePreK ? _choosePreK(false) : _choosePreK(true);
              chooseK && _chooseK(false);
              choose1 && _choose1(false);
              choose2 && _choose2(false);
            }}
            active={choosePreK}
          />
          <IntroChooseItem
            label="Level K"
            title="초급"
            detail="영어 학습 경험 2년 미만 학생에게 권장"
            symbolImgSrc="/src/images/@intro-choose-level/symbol_img_02.svg"
            onClick={() => {
              choosePreK && _choosePreK(false);
              chooseK ? _chooseK(false) : _chooseK(true);
              choose1 && _choose1(false);
              choose2 && _choose2(false);
            }}
            active={chooseK}
          />
          <IntroChooseItem
            label="Level 1"
            title="중급"
            detail="영어 학습 경험 3년 미만 학생에게 권장"
            symbolImgSrc="/src/images/@intro-choose-level/symbol_img_03.svg"
            onClick={() => {
              choosePreK && _choosePreK(false);
              chooseK && _chooseK(false);
              choose1 ? _choose1(false) : _choose1(true);
              choose2 && _choose2(false);
            }}
            active={choose1}
          />
          <IntroChooseItem
            label="Level 2~4"
            title="상급"
            detail="영어 학습 경험 3년 이상 학생에게 권장"
            symbolImgSrc="/src/images/@intro-choose-level/symbol_img_04.svg"
            onClick={() => {
              choosePreK && _choosePreK(false);
              chooseK && _chooseK(false);
              choose1 && _choose1(false);
              choose2 ? _choose2(false) : _choose2(true);
            }}
            active={choose2}
          />
        </div>
      </div>
    </div>
  );
}

// 단계선택 아이템
export function IntroChooseItem({
  label,
  title,
  detail,
  symbolImgSrc,
  onClick,
  active,
}) {
  return (
    <div style={{ minHeight: "300px", position: "relative" }} onClick={onClick}>
      <div className={`${style.intro_choose_item} ${active && style.active}`}>
        <div className={style.exp}>
          <div className={style.txt_l}>{label}</div>
          <div className={style.txt_h}>{title}</div>
          <div className={style.txt_p}>{detail}</div>
        </div>
        <div className={style.symbol_image}>
          <Image src={symbolImgSrc} width={100} height={120} />
        </div>
      </div>
      <div className={style.buttons}>
        <div className={style.preview}>
          <div className={style.preview_link}>미리 보기</div>
        </div>
        <Button color={"red"} shadow>
          시작
        </Button>
      </div>
    </div>
  );
}
