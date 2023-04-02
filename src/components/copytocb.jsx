import { useState } from "react";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

function CopyToClipboard(props) {
  let [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied === true) {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  });

  return (
    <div
      className="grid grid-cols-4 border rounded-lg p-2 border-blue-300 bg-blue-500 text-white hover:bg-blue-600 transition-colors"
      onClick={() => {
        navigator.clipboard.writeText(props.text);
        setCopied(true);
      }}
    >
      <div className="col-span-3 truncate">{props.text}</div>
      <div className="justify-self-center lg:justify-self-end cursor-pointer">
        {copied === true ? (
          <CheckIcon className="transform translate-z-0 h-7 w-7" />
        ) : (
          <ClipboardIcon className="transform translate-z-0 h-7 w-7" />
        )}
      </div>
    </div>
  );
}

function CodeCopyBtn(props) {
  let [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied === true) {
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  });

  return (
    <div
      className="code-copy-btn"
      onClick={() => {
        navigator.clipboard.writeText(props.children[0].props.children[0]);
        setCopied(true);
      }}
    >
      <div className="justify-self-center lg:justify-self-end">
        {copied === true ? (
          <CheckIcon className="transform translate-z-0 h-7 w-7" />
        ) : (
          <ClipboardIcon className="transform translate-z-0 h-7 w-7" />
        )}
      </div>
    </div>
  );
}

export { CopyToClipboard, CodeCopyBtn };
