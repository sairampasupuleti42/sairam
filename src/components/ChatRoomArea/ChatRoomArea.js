import React, { useState, Fragment } from "react";
import parse from "html-react-parser";
import "./ChatRoomArea.css";
import "./../conversation-style.css";
export default function ChatRoomArea({ data }) {
  return (
    <div className="msg__container">
      {data
        ? data.map((content, i) => (
            <div key={i}>
              {content?.optional?.exp_stamp ? (
                <div class="conv__msg__status">
                  <div>{content?.optional?.exp_stamp}</div>
                </div>
              ) : (
                ""
              )}
              {content?.qus ? (
                <div className="conversation__style__container right">
                  <p>{parse(content?.qus)}</p>
                  <span>{content?.optional?.exp_text}</span>
                </div>
              ) : (
                ""
              )}
              {!content?.multiLine && content?.ans ? (
                <div className="conversation__style__container left">
                  <p style={{ fontWeight: content?.fontWeight }}>
                    {parse(content?.ans)}
                  </p>
                </div>
              ) : (
                content.ans.map((msg, i) => (
                  <div key={i} className="conversation__style__container left">
                    <p style={{ fontWeight: content?.fontWeight }}>
                      {parse(msg)}
                    </p>
                  </div>
                ))
              )}
            </div>
          ))
        : ""}
    </div>
  );
}
