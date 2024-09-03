import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { MdOutlineImage } from "react-icons/md";
import { faker } from "@faker-js/faker";
import { imageToString } from "../../../utils/imageToString";
import { useAppSelector } from "../../../store/hooks";
import { Post, PostStatus } from "../../../interfaces/Post";
import { usePosts } from "../../../hooks/usePosts";

const PostForm = () => {
  const user = useAppSelector((state) => state.auth.user);

  const [postImage, setPostImage] = useState<string>("");
  const [postText, setPostText] = useState<string>("");

  const { submitPost } = usePosts();

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(e.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!hiddenFileInput || !hiddenFileInput.current) return;

    hiddenFileInput.current.click();
  };

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = e.target.files;
    if (!fileUploaded) return;
    imageToString(fileUploaded[0], setPostImage);
  };

  const handleSubmit = () => {
    const payload: Post = {
      message: postText,
      author: user,
      create_at: new Date(),
      status: PostStatus.PUBLISHED,
      location: `lat: ${faker.location.latitude()}, lon: ${faker.location.longitude()}`,
      likes: [],
      image: postImage,
    };

    submitPost(payload);
    setPostImage("");
    setPostText("");
  };

  return (
    <div className="bg-white border border-gray-500 p-7 rounded-sm">
      <textarea
        className="w-full min-h-28 focus:outline-none "
        onChange={handleText}
        name="post"
        id="post"
        placeholder="Agrega un nuevo post"
        cols={6}
      ></textarea>
      <div className="flex justify-between items-center border-t border-gray-500 mt-6 pt-6">
        <div>
          <button onClick={handleClick}>
            <MdOutlineImage className="text-purple-500 hover:text-purple-700 text-lg" />
          </button>
          <input
            type="file"
            onChange={handleUploadImage}
            ref={hiddenFileInput}
            style={{ display: "none" }}
          />
        </div>
        <button
          className="bg-purple-600 disabled:bg-gray-400 text-white font-bold px-5 py-2 rounded-sm"
          onClick={handleSubmit}
          disabled={postText === ""}
        >
          Crear
        </button>
      </div>
    </div>
  );
};

export default PostForm;
