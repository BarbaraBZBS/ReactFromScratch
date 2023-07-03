import ReactDOM from "react-dom/client";

function App() {
    return (
        <h1> REACT FROM SCRATCH </h1>
    )
}

const container = document.getElementById( 'root' );
const root = ReactDOM.createRoot( container );
root.render( <App /> )