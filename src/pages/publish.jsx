import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Publish() {
  const navigate = useNavigate();
  let done = false;

  useEffect(() => {
    if (!done) {
      done = true;

      const note = {
        name: localStorage.getItem("NoteName"),
        text: localStorage.getItem("NoteText"),
      };

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
              navigate(`/pubNotes/${data.id}`, { replace: true });
            })
            .catch(() => {
              navigate(`/pubError`, { replace: true });
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
