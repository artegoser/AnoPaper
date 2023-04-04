import { printDate } from "../components/utils";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { ButtonWithIcon } from "../components/button";
import { useSearchParams } from "react-router-dom";

function PubError() {
  const [searchParams] = useSearchParams();
  let err = searchParams.get("err");

  return (
    <div className="">
      <ButtonWithIcon
        className="mb-4"
        href="/"
        text={locals.Back}
        icon={ChevronDoubleLeftIcon}
      />

      <div className="border border-blue-300 rounded-lg p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <h2 className="font-medium text-center lg:text-left leading-tight text-4xl mt-0 mb-2">
            {locals.PubError}
          </h2>
          <div className="justify-self-center lg:justify-self-end">
            {printDate(Date.now())}
          </div>
        </div>
        <div className="w-full md">{err ? err : locals.PubErrorMsg}</div>
      </div>
    </div>
  );
}

export default PubError;
