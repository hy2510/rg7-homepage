"use client";

import styles from "./common-components.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const style = styles;

// 기본버튼
export function Button({ color, shadow, roundFull, width, onClick, children }) {
  let buttonColor;
  switch (color) {
    case "red":
      buttonColor = style.red;
      break;
    case "blue":
      buttonColor = style.blue;
      break;
    case "gray":
      buttonColor = style.gray;
      break;
    case "dark":
      buttonColor = style.dark;
      break;
    default:
      buttonColor = style.blue;
      break;
  }

  return (
    <div
      className={`${style.bs_button} ${buttonColor} ${shadow && style.shadow} ${
        roundFull && style.round_full
      }`}
      onClick={onClick}
      style={{ width: width }}
    >
      {children}
    </div>
  );
}

// 뒤로가기
export function BackLink({ href, largeFont, children }) {
  return (
    <div className={style.back_link}>
      <Link href={href ? href : "/"}>
        <div className={style.back_link}>
          <Image
            src="/src/images/arrow-icons/chv_left.svg"
            width={26}
            height={26}
          />
          <div className={`${largeFont ? style.txt_d2 : style.txt_d1}`}>
            {children}
          </div>
        </div>
      </Link>
    </div>
  );
}

// 얼럿바
export function AlertBar({ children }) {
  return (
    <div className={style.alert_bar}>
      {children}
      <div className={style.delete_button}>
        <Image
          src="/src/images/delete-icons/x_orange.svg"
          width={24}
          height={24}
        ></Image>
      </div>
    </div>
  );
}

// 얼럿박스
export function AlertBox({
  toolTipRight,
  toolTipLeft,
  text,
  onClickY,
  onClickN,
}) {
  return (
    <div
      className={`${style.alert_box} ${
        toolTipRight
          ? style.tool_tip_right_arrow
          : toolTipLeft
          ? style.tool_tip_left_arrow
          : null
      }`}
    >
      <div className={style.txt_l}>{text}</div>
      <div className={style.buttons}>
        <div className={style.button} onClick={onClickY}>
          예
        </div>
        <div className={style.button} onClick={onClickN}>
          아니오
        </div>
      </div>
    </div>
  );
}

// 필터 콘테이너
export function FilterContainer({ children }) {
  return (
    <div className={style.fliter_container}>
      <div className={style.filter_items}>{children}</div>
      <div className={style.filter_button}>
        <Image
          src="/src/images/filter-icons/filter_blue.svg"
          width={20}
          height={20}
        ></Image>
        <div className={style.txt_l}>필터</div>
      </div>
    </div>
  );
}

// 필터 아이템
export function FilterItem({ children }) {
  return <div className={style.filter_item}>{children}</div>;
}

// 텍스트필드
export function TextFiled(props) {
  return (
    <div
      className={`text-field ${props.border} ${
        props.disabled ? "disabled" : null
      }`}
      style={{ width: props.width }}
    >
      <div className="label">{props.label}</div>
      <input
        type={props.type}
        placeholder={props.placeholder}
        style={{ width: props.width }}
        value={props.value}
        disabled={props.disabled}
        name={props.name}
      ></input>
    </div>
  );
}

// 네브
export function Nav({ children }) {
  return <div className={style.nav_container}>{children}</div>;
}

// 네브 아이템
export function NavItem({ active, onClick, width, children, toolTip }) {
  return (
    <div
      className={`${style.nav_item} ${active && style.on}`}
      onClick={onClick}
      style={{ width: width }}
    >
      <div className={style.nav_contents}>
        <span>
          {children}
          {toolTip == null ? null : (
            <div className={style.tool_tip}>{toolTip}</div>
          )}
        </span>
      </div>
    </div>
  );
}

// 필 네브
export function Pills({ children }) {
  return <div className="pill-container">{children}</div>;
}

// 필 네브 아이템
export function PillItem({ active, children }) {
  return <div className={`pill-item ${active}`}>{children}</div>;
}

// 페이지네이션
export function Pagination({ children }) {
  return (
    <nav aria-label="Page navigation">
      <ul className={style.pagination}>{children}</ul>
    </nav>
  );
}

// 페이지네이션 아이템
export function PaginationItem({ active, onClick, children }) {
  return (
    <li className={`${style.pagination_item} ${active && style.on}`}>
      <button onClick={onClick ? onClick : null}>{children}</button>
    </li>
  );
}

// 프로그레스바 (width: 프로그레스 길이 -> %로 표시, check: 체크포인트가 있는 경우, toolTip: 체크 포인트의 툴팁)
export function ProgressBar({ width, check, toolTip }) {
  return (
    <div className={style.progress_bar}>
      <div className={style.progress} style={{ width: width }}>
        <div className={style.pointer}>{width}</div>
      </div>
      {check && (
        <div className={style.check} style={{ width: check }}>
          <div className={style.tool_tip}>{toolTip}</div>
        </div>
      )}
    </div>
  );
}

// 드랍다운
export function Dropdown({ inlineStyle, fontSizeM, title, children }) {
  const [check, _check] = useState(false);

  return (
    <div className="flex">
      <div
        className={style.dropdown}
        onClick={() => {
          check ? _check(false) : _check(true);
        }}
        style={inlineStyle}
      >
        <div className={`${style.title} ${fontSizeM && style.txt_h}`}>
          {title}
        </div>
        <Image
          src="/src/images/arrow-icons/chv_down.svg"
          width={20}
          height={20}
        />
        {check && <div className={style.menu}>{children}</div>}
      </div>
      {check && (
        <div
          className={style.transparent_box}
          onClick={() => {
            check == false ? _check(true) : _check(false);
          }}
        ></div>
      )}
    </div>
  );
}

// 드랍다운 아이템
export function DropdownItem({ onClick, children }) {
  return (
    <div className={style.dropdown_item} onClick={onClick && onClick}>
      {children}
    </div>
  );
}

// 모달 템플릿
export function Modal({ compact, header, title, onClickDelete, children }) {
  return (
    <>
      <div className={style.modal}>
        <div
          className={`${style.modal_container} slide-in-top ${
            compact && style.compact
          }`}
        >
          {header && (
            <div className={style.modal_header}>
              <div className={style.modal_header_container}>
                <div className={style.txt_h}>{title}</div>
              </div>
              <button onClick={onClickDelete}>
                <Image
                  src="/assets/images/icon/x/x_black.svg"
                  width="28"
                  height="28"
                />
              </button>
            </div>
          )}
          <div className={style.modal_body}>{children}</div>
        </div>
      </div>
      <div className={style.light_box} onClick={onClickDelete}></div>
    </>
  );
}
