import React, { useState } from "react";
import parse from "html-react-parser";
import "./ChatRoomArea.css";
import "./../conversation-style.css";
export default function ChatRoomArea({ data, user, chat }) {
  return (
    <div className="msg__container">
      {chat && data ? (
        <div>
          {data.map((content, i) => (
            <div key={i}>
              <div
               className={ user.uid === content.uid ? 'conversation__style__container right' : 'conversation__style__container left'}>
                <div className="msg__sender">
                   { 
user.uid !== content.uid ? content?.displayName :""
 }
                 </div>
<p>{parse(content?.text)}</p>
              </div>
            </div>
          ))}{" "}
        </div>
      ) : (
        <div>
          <div>
            {data
              ? data.map((content, i) => (
                  <div key={i}>
                    <div>
                      {content?.optional?.exp_stamp ? (
                        <div className="conv__msg__status">
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
                          {content?.attachment ? (
                            <p className="download__resume__button">
                              {parse(content?.ans)}
                            </p>
                          ) : (
                            <p style={{ fontWeight: content?.fontWeight }}>
                              {parse(content?.ans)}
                            </p>
                          )}
                        </div>
                      ) : (
                        content?.ans?.map((msg, i) => (
                          <div
                            key={i}
                            className="conversation__style__container left"
                          >
                            <p style={{ fontWeight: content?.fontWeight }}>
                              {parse(msg)}
                            </p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      )}
    </div>
  );
}
