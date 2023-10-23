import Script from 'next/script'
export default function Monitor() {
  return (
    <>
    <div id="container">
    <h1><a title="WebRTC in RUST !" style={{color: 'white'}}>WebRTC in Rust</a></h1>

    <label id="sessionid_heading" style={{color: 'rgb(145, 133, 197)'}}>Hosting Session ID:</label> 
    <label className= "sinulabel" id="sessionid_lbl" ></label>
    <br></br>
    <label id="session_connection_status" style={{color: 'rgb(255, 255, 255)'}}></label>
    <label  id="session_connection_status_error" style={{color: 'rgb(207, 9, 9)'}}></label>


    <h3><a title="Peer A Video" style={{color: 'white'}} >Peer A Video</a></h3>
    <video id="peer_b_video" width="1280" height="720" style={{color: 'white; outline-style: solid'}} muted autoPlay playsInline></video>
    <video id="peer_a_video" width="320" height="240" style={{color: 'white; outline-style: solid'}} autoPlay></video>

    <br></br>
    <button id="connect_to_session" style={{height:'50px'}} hidden>Connect to Session</button>
    <input type="text" id="sid_input" name="sid_input" hidden/>
    <br></br>

    <hr></hr>
    <button id="debug_client_state" style={{height:'50px'}} hidden>Print Client State</button>
    <label id="ws_conn_lbl" style={{color: 'rgb(29, 161, 69)'}} hidden></label> 
    <br></br>
    <button id="debug_signal_server_state" style={{height:'50px'}} hidden>Print Signalling Server State(In Terminal) </button>
    <label id="ws_conn_lbl_err" style={{color: 'red'}} hidden></label>
    <br></br>


    <hr></hr>
    <h3><a title="Peer B Video" style={{color: 'white'}}>Peer B Video</a></h3>
    <br></br>
    <button id="start_session" style={{height: '50px'}}>Start Session</button>

</div>

<Script

  id="load-wasm"
  type="module"
  dangerouslySetInnerHTML={{
    __html: `import init from '/monitor/pkg/wasm_client.js';
      init('/monitor/pkg/wasm_client_bg.wasm');`,
  }}
/>
</>
            
  )
}
