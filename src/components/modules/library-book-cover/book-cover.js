"use client";

import { AlertBox, Button, Modal } from "@/components/common/common-components";
import styles from "./book-cover.module.scss";
import Image from "next/image";
import { useState } from "react";

const style = styles;

// 도서 아이템
export function BookCover({
  bookImgSrc,
  bookCode,
  title,
  author,
  summary,
  assignDate,
  earnPoint,
  isToDoOn,
  isFavoriteOn,
  key,
}) {
  const [isBookInfoActive, _isBookInfoActive] = useState(false);

  return (
    <>
      <div className={style.book_cover} key={key}>
        <div className={style.container}>
          <Image
            src={bookImgSrc}
            layout="intrinsic"
            width={200}
            height={200}
            className={style.book_image}
            onClick={() => {
              _isBookInfoActive(true);
            }}
            art=""
          />
          {bookCode && (
            <div className={style.tag}>
              <span>{bookCode}</span>
            </div>
          )}
          {assignDate && (
            <div className={style.tag}>
              <span>+{assignDate}</span>
            </div>
          )}
          {earnPoint && (
            <div className={`${style.tag} ${style.point}`}>
              <span>{earnPoint}P</span>
            </div>
          )}
        </div>
      </div>
      {isBookInfoActive && (
        <BookInfoModal
          _isBookInfoActive={_isBookInfoActive}
          bookImgSrc={bookImgSrc}
          isToDoOn={isToDoOn}
          isFavoriteOn={isFavoriteOn}
          title={title}
          author={author}
          summary={summary}
          onClickDelete={() => {
            _isBookInfoActive(false);
          }}
        />
      )}
    </>
  );
}

// 도서 정보 모달
export function BookInfoModal({
  bookImgSrc,
  title,
  _isBookInfoActive,
  author,
  summary,
  addedToDo,
  addedFavorite,
  onClickDelete,
}) {
  const [isFavoriteOn, _isFavoriteOn] = useState(addedFavorite);
  const [isFavoriteCheck, _isFavoriteCheck] = useState(false);
  const [isToDoOn, _isToDoOn] = useState(addedToDo);
  const [isToDoCheck, _isToDoCheck] = useState(false);

  return (
    <Modal
      onClickDelete={() => {
        _isBookInfoActive(false);
      }}
    >
      <div className={style.book_info_modal}>
        <div
          className={style.col_a}
          style={{ backgroundImage: `url(${bookImgSrc})` }}
        >
          <div className={style.col_a_container}>
            <div className={style.add_assignment}>
              <div className={style.add_assignment_container}>
                <div className={style.add_favorite}>
                  <div
                    className={style.add_favorite_icon}
                    onClick={() => {
                      _isFavoriteCheck(true);
                      _isToDoCheck(false);
                    }}
                  >
                    {isFavoriteOn ? (
                      <Image
                        src="/src/images/@book-info/add_favorite_on.svg"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        src="/src/images/@book-info/add_favorite_off.svg"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                  {isFavoriteOn ? (
                    isFavoriteCheck ? (
                      <div className={style.alert}>
                        <AlertBox
                          toolTipRight
                          text="Favorite에서 학습을 삭제할까요?"
                          onClickY={() => {
                            _isFavoriteOn(false);
                            _isFavoriteCheck(false);
                          }}
                          onClickN={() => {
                            _isFavoriteCheck(false);
                          }}
                        />
                      </div>
                    ) : null
                  ) : isFavoriteCheck ? (
                    <div className={style.alert}>
                      <AlertBox
                        toolTipRight
                        text="Favorite에 학습을 추가할까요?"
                        onClickY={() => {
                          _isFavoriteOn(true);
                          _isFavoriteCheck(false);
                        }}
                        onClickN={() => {
                          _isFavoriteCheck(false);
                        }}
                      />
                    </div>
                  ) : null}
                </div>
                <addFavoriteButton />
                <div className={style.add_todo}>
                  <div
                    className={style.add_todo_icon}
                    onClick={() => {
                      _isFavoriteCheck(false);
                      _isToDoCheck(true);
                    }}
                  >
                    {isToDoOn ? (
                      <Image
                        src="/src/images/@book-info/add_to_do_on.svg"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        src="/src/images/@book-info/add_to_do_off.svg"
                        width={24}
                        height={24}
                      />
                    )}
                  </div>
                  {isToDoOn ? (
                    isToDoCheck ? (
                      <div className={style.alert}>
                        <AlertBox
                          toolTipRight={true}
                          text="To-Do에서 학습을 삭제할까요?"
                          onClickY={() => {
                            _isToDoOn(false);
                            _isToDoCheck(false);
                          }}
                          onClickN={() => {
                            _isToDoCheck(false);
                          }}
                        />
                      </div>
                    ) : null
                  ) : isToDoCheck ? (
                    <div className={style.alert}>
                      <AlertBox
                        toolTipRight={true}
                        text="To-Do에 학습을 추가할까요?"
                        onClickY={() => {
                          _isToDoOn(true);
                          _isToDoCheck(false);
                        }}
                        onClickN={() => {
                          _isToDoCheck(false);
                        }}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className={style.book}>
              <div className={style.book_container}>
                <div className={style.book_image}>
                  <Image
                    src={bookImgSrc}
                    layout="intrinsic"
                    width={200}
                    height={200}
                  />
                </div>
                <div className={style.txt_h}>{title}</div>
                <div className={style.txt_l}>{author}</div>
              </div>
              <div className={style.download}>
                <div className={style.download_voca}>
                  <span>단어장</span>
                  <Image
                    src="/src/images/@book-info/download.svg"
                    width={14}
                    height={14}
                  />
                </div>
                <div className={style.download_worksheet}>
                  <span>워크시트</span>
                  <Image
                    src="/src/images/@book-info/download.svg"
                    width={14}
                    height={14}
                  />
                </div>
              </div>
            </div>
            <Button width="100%" shadow color={"red"}>
              학습하기
            </Button>
          </div>
          <div className={style.light_box}></div>
        </div>
        <div className={style.col_b}>
          <div className={style.col_b_header}>
            <div className={style.txt_h}>학습 정보</div>
            <div className={style.delete_button} onClick={onClickDelete}>
              <Image
                src="/src/images/delete-icons/x_black.svg"
                width={28}
                height={28}
              />
            </div>
          </div>
          <div className={style.col_b_body}>
            <div className={style.book_info}>
              <div className={style.txt_p}>{summary}</div>
              <div className={style.detaild}>
                <div className={style.detaild_row_a}>
                  <div className={style.detaild_item}>학습 레벨</div>
                  <div className={style.detaild_item}>1B</div>
                  <div className={style.detaild_item}>북코드</div>
                  <div className={style.detaild_item}>EB-1B-003</div>
                  <div className={style.detaild_item}>페이지수</div>
                  <div className={style.detaild_item}>22</div>
                  <div className={style.detaild_item}>단어수</div>
                  <div className={style.detaild_item}>99000</div>
                  <div className={style.detaild_item}>등급</div>
                  <div className={style.detaild_item}>All</div>
                  <div className={style.detaild_item}>장르</div>
                  <div className={style.detaild_item}>Fiction</div>
                </div>
                <div className={style.detaild_row_b}>
                  <div className={style.detaild_item}>학습횟수</div>
                  <div className={style.detaild_item}>1/2</div>
                  <div className={style.detaild_item}>포인트</div>
                  <div className={`${style.detaild_item} ${style.passed}`}>
                    학습횟수 1회 완료 (+1P)
                  </div>
                  <div className={style.detaild_item}></div>
                  <div className={style.detaild_item}>
                    학습횟수 2회 완료시: 0.5P 획득
                  </div>
                </div>
              </div>
            </div>
            <div className={style.book_resource}>
              <div className={style.book_resource_container}>
                <div className={style.txt_h}>추가 학습</div>
                <div className={style.buttons}>
                  <div className={style.speak_button}>Speak</div>
                  <div className={style.movie_button}>영상시청</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
