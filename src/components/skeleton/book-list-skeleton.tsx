import style from "./book-list-skeleton.module.css";

function BookItemSkeleton() {
  return (
    <div className={style.container}>
      <div className={style.cover_img}></div>
      <div className={style.info_container}>
        <div className={style.title}></div>
        <div className={style.subTitle}></div>
        <br />
        <div className={style.author}></div>
      </div>
    </div>
  );
}

export default function BookListSkeleton({ count }: { count: number }) {
  return new Array(count)
    .fill(0)
    .map((_, idx) => <BookItemSkeleton key={`book-item-${idx}`} />);
}
