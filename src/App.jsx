import React from "react";
import axios from "axios";
function App() {
  const [data, setData] = React.useState({ id: "", name: "" });
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      let fetch = axios.get("http://3.109.32.218:4545/all-names");
      console.log("->", (await fetch).data());
    };
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <label htmlFor="id">Pic Id</label>
        <input type="text" name="id" id="id" placeholder="Pic Id" />
      </div>
      <div>
        <label htmlFor="name">Pic Name</label>
        <input type="text" name="name" id="name" placeholder="Pic Name" />
      </div>
    </div>
  );
}

export default App;
