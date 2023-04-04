import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Publish() {
  const navigate = useNavigate();
  let done = false;

  useEffect(() => {
    if (!done) {
      done = true;

      let err = false;
      const note = {
        name: localStorage.getItem("NoteName"),
        text: localStorage.getItem("NoteText"),
      };

      if (!note.name) {
        err = locals.PubErrorMsgNoName;
      }
      if (!note.text) {
        err = locals.PubErrorMsgNoText;
      }

      fetch(`/publish`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(note),
      })
        .then((data) => {
          data
            .json()
            .then((data) => {
              localStorage.removeItem("NoteName");
              localStorage.removeItem("NoteText");
              navigate(`/pubNotesSafe/${data.id}`, { replace: true });
            })
            .catch(() => {
              if (err == false) {
                navigate(`/pubError`, { replace: true });
              } else navigate(`/pubError?err=${err}`, { replace: true });
            });
        })
        .catch(() => {
          navigate(`/pubError`, { replace: true });
        });
    }
  }, []);

  return <div />;
}

export default Publish;
