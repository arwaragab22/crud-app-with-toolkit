import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addpost, deletepost, updpost } from './redux/slice';

export default function FORM() {
  const t = useRef();
  const d = useRef();
  const a = useRef();
  const b = useRef();
   const c = useRef();
   const f = useRef();
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [counter, setcounter] = useState(0);
  const [isupdate, setisupdate] = useState(false);
  const [updid, setupdid] = useState(null);
  const [updtitle, setupdtitle] = useState("");
  const [upddesc, setupddesc] = useState("");
  const [vlaone, setvalone] = useState("");
    const [vlatwo, setvaltwo] = useState("");
  const p = useSelector((state) => state.postinfo.posts);
  const disp = useDispatch();
  let i = 0;

  return (
    <React.Fragment>
      <div className="form">
        <input
          value={title}
          type="text"
          placeholder="enter title"
          onChange={(e) => settitle(e.target.value)}
          ref={t}
        />
        <input
          type="text"
          value={desc}
          placeholder="enter description"
          onChange={(e) => setdesc(e.target.value)}
          ref={d}
        />
        <button
          onClick={() => {
            if (t.current.value !== "" && d.current.value !== "") {
              setcounter(counter + 1);
              disp(addpost({ id: counter, title, desc }));
              settitle("");
              setdesc("");
            }


          }}
        >
          add post
        </button>
      </div>

      {<table id="customers">
        <tr>
          <th>title</th>
          <th>description</th>
          <th>action</th>
        </tr>
        {p.map((ele, i) => {
          return (
            <tr key={i}>
              {isupdate === true && ele.id === updid ? (
                <td>
                  <input
                    type="text"
                    ref={a}
               
                    onChange={(e) => setupdtitle(e.target.value)}
                  />
                </td>
              ) : (
                <td ref={b}>{ele.title}</td>
              )}
              {isupdate === true && ele.id === updid ? (
                <td>
                  <input
                    type="text"
               
                    onChange={(e) => setupddesc(e.target.value)}
                    ref={c}
                  />
                </td>
              ) : (
                <td className="desc" ref={f}>
                  {ele.desc}
                </td>
              )}

              <td>
                <button
                  onClick={() => {
                    setisupdate(!isupdate);

                    setupdid(ele.id);
                    if (isupdate === true) {
                      setvalone(ele.title);
                      setvaltwo(ele.desc);
                      console.log(ele.title);
                      a.current.value = ele.title;

                      disp(
                        updpost({
                          id: ele.id,
                          title: updtitle,
                          desc: upddesc,
                        })
                      );
                    }
                  }}
                >
                  update
                </button>

                <button
                  onClick={() => {
                    disp(deletepost({ id: ele.id }));
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      }

    </React.Fragment>
  );
}
