/*
 Copyright (c) 2023 artegoser (Artemy Egorov)

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

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

function CodeCopyBtn({ text }) {
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
        navigator.clipboard.writeText(text);
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
