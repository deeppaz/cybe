export function Underlay() {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: 40,
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          pointerEvents: "none",
        }}>
        <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <p
            style={{
              fontFamily: "'Antonio', sans-serif",
              flex: "1 1 0%",
              height: 30,
              fontSize: 30,
              fontWeight: "700",
              lineHeight: "30px",
              color: "black",
              letterSpacing: -2,
            }}>
            CYBE.
          </p>
          <div style={{ width: 10 }} />
          <p className="full" style={{ flex: "1 1 0%", height: 12, fontSize: 12, lineHeight: "12px", textAlign: "center", color: "black" }}>
          Click on the part of the cube where you want to change the color
          </p>
          <div style={{ width: 10 }} />
        <a href="https://opensea.io/collection/cybe"  style={{ zIndex:1, flex: "1 1 0%", height: 30, fontSize: 25, lineHeight: "1.5em", color: "black", lineHeight: "30px", textAlign: "right" }}><img style={{width:"35px"}} src="https://seeklogo.com/images/O/opensea-logo-7DE9D85D62-seeklogo.com.png"/></a>
        </div>
        <div style={{ height: 60 }} />
        <div style={{ width: "100%", padding: 0, display: "inline-flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "center" }}>
          <p style={{ flex: "1 1 0%", height: "100%", fontSize: 12, lineHeight: "1.5em", color: "black" }}>
            <b>Front, Back, Top, Left, Right and Line</b>
            <br />
           All of CYBE
            <br />
          </p>
          <div style={{ width: 10 }} />
          <p
            style={{
              zIndex:1,
              transform: "rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)",
              transformOrigin: "right",
              fontSize: 12,
              fontWeight: "700",
              lineHeight: "100%",
              textAlign: "right",
              color: "black",
              whiteSpace: "nowrap",
            }}>
           <a href="https://mintcybe.vercel.app/"  style={{fontSize: 25}}>  MINT CYBE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ● </a> 
          </p>
        </div>
        <div style={{ height: 10 }} />
        <div
          className="full"
          style={{
            fontFamily: "'Antonio', sans-serif",
            width: "100%",
            flex: "1 1 0%",
            padding: 0,
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
          }}>
          <p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "1em", color: "black", margin: 0, letterSpacing: -10 }}>⬡</p>
          <div style={{ width: 10 }} />
          <p style={{ flex: "1 1 0%", fontSize: 250, lineHeight: "100%", textAlign: "right", color: "black", margin: 0, letterSpacing: -10 }}>01</p>
        </div>
        <div style={{ height: 60 }} />
        <div
          style={{
            pointerEvents: "all",
            pointer: "auto",
            width: "100%",
            padding: 0,
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
          }}>
          <p className="full" style={{ whiteSpace: "nowrap", flex: "1 1 0%", fontSize: 12, lineHeight: "1.5em", color: "black" }}>
            <b>META</b>
            <br />
            DATA
          </p>
          <div style={{ width: 10 }} />
          <p
            className="full"
            style={{
              fontFamily: "'Antonio', sans-serif",
              flex: "1 1 0%",
              fontSize: 16,
              fontWeight: "700",
              lineHeight: "1em",
              textAlign: "center",
              color: "black",
              letterSpacing: -0.5,
              whiteSpace: "nowrap",
            }}>
            CUBE BUT CYBE
          </p>
          <div style={{ width: 10 }} />
          <p className="full" style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right", color: "black" }}></p>
        </div>
      </div>
    )
  }
  
  export function Overlay() {
    return (
      <div style={{ position: "absolute", bottom: 40, right: 40 }}>
        <p style={{ flex: "1 1 0%", fontSize: 12, lineHeight: "1em", textAlign: "right", color: "black" }}>
          <a href="http://cybe.vercel.app/">cybe</a><a href="https://opensea.io/collection/cybe">opensea</a>  <a href="https://twitter.com/0xcybe">twitter</a> <a href="https://www.instagram.com/0xcybe/">instagram</a>
        </p>
      </div>
    )
  }
  