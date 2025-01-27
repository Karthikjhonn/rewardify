import React from "react";
const imgUrl =
  "https://s3-alpha-sig.figma.com/img/e247/4551/7b7b8608be656f1e497e854c74b2f7e6?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I1pfGhHyB8rh7rcaaSSUcKzN1z-i7TZ6BMaZizbVYSY0sS4dNJuNhElnStNXhsumYsgtgyXTzf8KmyryJOJIcp9QQh8SLju0r~G0-RhTVdIctXwASW5DEYn~PN40w45Z58G6~JNOUQaX9xgRISl7hNk6QM5Sjd5OBQCGXf-TcaAMv~fInWhTF53HSeo6HPlet8W2lC2sLdMD86eP1ZX8lxfnTalZXKw5neGwfMA7h4KvV-gV6PMR2ihI5sD-78BcZyFcO3WOvySIhiiSd88CyoC43eHnEG52V44jZCabBMvIusQvA6DxC~4LLiNoHgskVaQXKalAdPq5aFbZJegVNw__";
function SelectStoreCard({ name, address, ID, selectedStore }) {
  return (
    <div className="border border-gray-300 rounded-xl p-3 text-black flex items-center gap-x-2 active:bg-gray-50 w-full">
      <div className="bg-gray-200 rounded-lg size-[84px] min-w-[84px]">
        <img
          src={imgUrl}
          alt="store image"
          className="aspect-square rounded-lg object-cover"
        />
      </div>
      <div className="space-y-1 grow">
        <h2 className="text-lg font-medium leading-none line-clamp-1">
          {name}
        </h2>
        <p className="text-sm leading-none line-clamp-1">{address}</p>
        <p className="text-sm leading-none line-clamp-1">
          Store ID: <span>{ID}</span>
        </p>
      </div>
      <div className=" ms-auto">
        <span
          className={`size-4 rounded-full border-2 border-black min-w-4 inline-flex justify-center items-center`}
        >
          <span
            className={`size-[10px] rounded-full bg-black min-w-[10px] inline-block  ${
              selectedStore ? "visible" : "invisible"
            } `}
          ></span>
        </span>
      </div>
    </div>
  );
}

export default SelectStoreCard;
