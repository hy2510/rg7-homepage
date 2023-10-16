"use client";

import style from "./global-header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// 공통상단
export default function Gheader({ children }) {
  return (
    <div className={style.global_header}>
      <div className={`${style.global_header_container} container`}>
        <div className={style.company_logo}>
          <Image
            alt=""
            src="/src/images/@global-header/company_logo_white.svg"
            width={48}
            height={40}
          />
        </div>
        <GnbLogOn />
        {/* <GnbLogOff /> */}
      </div>
    </div>
  );
}

// 공통상단 > 로그오프 상태의 메뉴
const GnbLogOff = () => {
  return (
    <>
      <div className={style.gnb_log_off}>
        <GnbButton
          active={true}
          href="/home/news"
          imgSrc="/src/images/@global-header/home.svg"
          menuName="홈"
        />
        <GnbButton
          active={false}
          href="/"
          imgSrc="/src/images/@global-header/about_rg.svg"
          menuName="소개"
        />
        <GnbButton
          active={false}
          href="/"
          imgSrc="/src/images/@global-header/trial.svg"
          menuName="체험"
        />
      </div>
      <div className={style.sign_buttons}>
        <Link href="/">회원 가입</Link>
        <Link href="/">로그인</Link>
      </div>
    </>
  );
};

// 공통상단 > 로그온 상태의 메뉴
const GnbLogOn = () => {
  const userAvatarImage =
    "https://wcfresource.a1edu.com/newsystem/image/character/maincharacter/dodo_03.png";
  const [isCalendarModalAct, _isCalendarModalAct] = useState(false);
  const [isStreakModalAct, _isStreakModalAct] = useState(false);
  const [isQuestModalAct, _isQuestModalAct] = useState(false);
  const [isAlarmModalAct, _isAlarmModalAct] = useState(false);
  const [isMyRgModalAct, _isMyRgModalAct] = useState(false);
  const [isMyRgItemsAct, _isMyRgItemsAct] = useState(0); // 0: My RG 메인, 1: 프로필, 2: 일일 목표, 3: 나의 학습 레벨

  return (
    <>
      <div className={style.gnb_log_on}>
        <GnbButton
          active={true}
          href="/"
          imgSrc="/src/images/@global-header/home.svg"
          menuName="홈"
        />
        <GnbButton
          active={false}
          href="/"
          imgSrc="/src/images/@global-header/study_room.svg"
          menuName="학습"
        />
        <GnbButton
          active={false}
          href="/"
          imgSrc="/src/images/@global-header/review.svg"
          menuName="리뷰"
        />
        <GnbButton
          active={false}
          href="/"
          imgSrc="/src/images/@global-header/ranking.svg"
          menuName="랭킹"
        />
      </div>
      <div className={style.option_buttons}>
        <OptionButton isCalendar />
        <OptionButton imgSrc="/src/images/@global-header/streak.svg" />
        <OptionButton imgSrc="/src/images/@global-header/quest.svg" />
        <OptionButton imgSrc="/src/images/@global-header/notice.svg" />
        <OptionButton isAvatar imgSrc={userAvatarImage} />
      </div>
    </>
  );
};

// 공통상단 > 메뉴 버튼
const GnbButton = ({ menuName, active, href, imgSrc }) => {
  return (
    <Link href={href}>
      <div className={`${style.gnb_button} ${active && style.active}`}>
        <Image alt="" src={imgSrc} width={24} height={24} />
        <span>{menuName}</span>
      </div>
    </Link>
  );
};

// 옵션 버튼
const OptionButton = ({ isCalendar, isAvatar, onClick, imgSrc }) => {
  const date = new Date();
  const today = ("0" + date.getDate()).slice(-2);
  const monthNames = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  const mon = monthNames[date.getMonth()];

  return (
    <>
      {isCalendar ? (
        <div className={style.option_button} onClick={onClick}>
          <div className={style.calendar}>
            <div className={style.date}>
              <div className={style.month}>{mon}</div>
              <div className={style.today}>{today}</div>
            </div>
            <div className={style.calendar_icon}>
              <Image
                alt=""
                src="/src/images/@global-header/calendar.svg"
                width={36}
                height={36}
              />
            </div>
          </div>
        </div>
      ) : isAvatar ? (
        <div
          className={`${style.option_button} ${style.avatar}`}
          onClick={onClick}
        >
          <Image alt="" src={imgSrc} width={40} height={40} />
        </div>
      ) : (
        <div className={style.option_button} onClick={onClick}>
          <Image alt="" src={imgSrc} width={26} height={26} />
        </div>
      )}
    </>
  );
};
