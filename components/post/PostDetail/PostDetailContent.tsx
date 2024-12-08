import Image from "next/image";

import kebabIcon from "@/public/icons/ic_kebab.png";
import profileImage from "@/public/icons/ic_profile.png";
import heartIcon from "@/public/icons/ic_heart.svg";

const title = "맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?";
const content = "맥북 16인치 16기가 1테라 정도 사양이면 얼마에 팔아야하나요?";
const comment_content = "혹시 사용기간이 어떻게 되실까요?";

const likeCount = 123;

const PostDetailContent = () => {
  return (
    <section>
      <div className="mb-4 flex justify-between">
        <h1 className="text-xl font-bold text-custom-black">{title}</h1>
        <button>
          <Image
            src={kebabIcon}
            alt="더보기"
            width={24}
            height={24}
            className=""
          />
        </button>
      </div>
      {/* 하단 정보 */}
      <div className="relative flex items-center border-b-[1px] border-gray-footer_text pb-4">
        <Image
          src={profileImage}
          alt="프로필 이미지"
          width={40}
          height={40}
          className="mr-4"
        />
        <span className="mr-2 text-sm text-gray-dark">총명한판다</span>
        <span className="mr-8 text-sm text-gray">2024. 01. 02</span>
        <div className="border-l-2 border-gray-footer_text pl-8">
          <div className="flex items-center gap-1 rounded-[35px] border px-3 py-1">
            <Image src={heartIcon} alt="좋아요" width={32} height={32} />
            {/* 좋아요 수 */}
            <span>{likeCount}</span>
          </div>
        </div>
      </div>
      <p className="mb-8 mt-6 text-lg text-gray-dark">{content}</p>
    </section>
  );
};

export default PostDetailContent;
