import style from "./series-list.module.scss";
import Image from "next/image";
import Link from "next/link";
import { AlertBar } from "@/components/common/common-components";

// 학습메인 > 사용자의 학습레벨의 시리즈 리스트
export function SeriesList({ children }) {
  return (
    <div className={style.series_list}>
      <div className={style.txt_h}>이 레벨의 시리즈</div>
      <AlertBar>이 레벨과 연관되는 시리즈를 볼 수 있어요!</AlertBar>
      <div className={style.series_list_container}>{children}</div>
    </div>
  );
}

// 학습메인 > 사용자의 학습레벨의 시리즈 아이템
export function SeriesItem({ seriesImgSrc, href }) {
  return (
    <Link href={href ? href : "/"}>
      <div className={style.series_item}>
        <Image
          alt=""
          src={seriesImgSrc}
          layout="intrinsic"
          width={200}
          height={200}
        />
      </div>
    </Link>
  );
}
