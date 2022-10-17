import { ButtonWithAction, IconWithButton } from "../components/button";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

function CreateNote() {
  return (
    <div>
      <h2 className="font-medium leading-tight text-4xl mt-0 mb-2">
        Написать записку
      </h2>
      <textarea
        className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
        text-gray-700
        dark:text-white
        bg-white 
        dark:bg-zinc-900
          bg-clip-padding
          border 
          border-solid 
        border-gray-300
          rounded-lg
          transition
          ease-in-out
          m-0
        focus:border-blue-600 
          focus:outline-none
        "
        rows="10"
        placeholder="Ваша записка начинается здесь..."
        maxLength={5000}
      ></textarea>
      <div className="grid grid-cols-2 justify-items-end w-full">
        <ButtonWithAction className="m-5" onClick={""}>
          <IconWithButton
            reverse={true}
            icon={
              <ChevronDoubleRightIcon className="transform translate-z-0 h-7 w-7" />
            }
          >
            Отправить
          </IconWithButton>
        </ButtonWithAction>
        <div className=""></div>
      </div>
    </div>
  );
}

export default CreateNote;
