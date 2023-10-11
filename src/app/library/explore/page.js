"use client";

import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Nav,
  NavItem,
  Pagination,
  PaginationItem,
} from "@/components/common/common-components";
import todoData from "@/app/library/sample-data-todo.json";
import bookData from "@/app/library/sample-data-book.json";
import { BookSearchBar } from "@/components/modules/library-book-search-bar/book-search-bar";
import { ExpTodoList } from "@/components/modules/library-explore-todo-list/todo-list";
import { BookCover } from "@/components/modules/library-book-cover/book-cover";
import { BookList } from "@/components/modules/library-explore-book-list/book-list";
import {
  SeriesItem,
  SeriesList,
} from "@/components/modules/library-explore-series-list/series-list";
import {
  ThemeList,
  ThemeListItem,
} from "@/components/modules/library-explore-theme-list/theme-list";
import { LevelUpStatus } from "@/components/modules/library-explore-level-up-status/level-up-status";

export default function Page() {
  const style = styles;

  return (
    <main className={style.explore}>
      <BookReadingMode />
    </main>
  );
}

// 모듈: 북리딩 모드
const BookReadingMode = () => {
  return (
    <>
      <ExpTodoList>
        {todoData.map((a, i) => {
          return (
            <BookCover
              key={`to-do-book-cover-${i}`}
              bookImgSrc={`https://wcfresource.a1edu.com/newsystem/image/br/covernew1/${a.bookImage}`}
              bookCode={a.bookCode}
              title={a.title}
              author={a.athor}
              summary={a.summary}
              addedToDo={a.addedToDo}
              addedFavorite={a.addedFavorite}
            />
          );
        })}
      </ExpTodoList>
      <LevelUpStatus studyLevel={"KA"} progress={"0%"} />
      <Nav>
        <NavItem active={true}>eBook</NavItem>
        <NavItem active={false}>pBookQuiz</NavItem>
      </Nav>
      <BookList>
        {bookData.map((a, i) => {
          return (
            <BookCover
              key={`book-cover-${i}`}
              bookImgSrc={`https://wcfresource.a1edu.com/newsystem/image/br/covernew1/${a.bookImage}`}
              bookCode={a.bookCode}
              title={a.title}
              author={a.athor}
              summary={a.summary}
              addedToDo={a.addedToDo}
              addedFavorite={a.addedFavorite}
            />
          );
        })}
      </BookList>
      <Pagination>
        <PaginationItem>
          <Image
            src="/src/images/arrow-icons/chv_left.svg"
            width={20}
            height={20}
          />
        </PaginationItem>
        <PaginationItem active={true}>1</PaginationItem>
        <PaginationItem active={false}>2</PaginationItem>
        <PaginationItem active={false}>3</PaginationItem>
        <PaginationItem active={false}>4</PaginationItem>
        <PaginationItem active={false}>5</PaginationItem>
        <PaginationItem>
          <Image
            src="/src/images/arrow-icons/chv_right.svg"
            width={20}
            height={20}
          />
        </PaginationItem>
      </Pagination>
      <SeriesList>
        <SeriesItem seriesImgSrc="/src/sample-images/series_sample.png" />
        <SeriesItem seriesImgSrc="/src/sample-images/series_sample.png" />
        <SeriesItem seriesImgSrc="/src/sample-images/series_sample.png" />
        <SeriesItem seriesImgSrc="/src/sample-images/series_sample.png" />
      </SeriesList>
      <ThemeList>
        <ThemeListItem themeImgSrc="/src/sample-images/theme_sample.png" />
        <ThemeListItem themeImgSrc="/src/sample-images/theme_sample.png" />
        <ThemeListItem themeImgSrc="/src/sample-images/theme_sample.png" />
      </ThemeList>
    </>
  );
};

// 모듈: PreK 모드

// 모듈: 영어독서왕 모드

// 모듈: 코스 모드

// 모듈: 레벨 선택
