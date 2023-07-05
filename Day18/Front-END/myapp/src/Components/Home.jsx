import React, { useEffect, useState } from "react";
import { getData } from "../Services/Weather.service";
import { insertData } from "../Services/InsertData.service";
import { getDataFromServer } from "../Services/GetData.service";
import { Typography, Input, Layout } from "antd";
import Logout from './Logout'
const Home = () => {
  var [data, setData] = useState(null);
  const [city, setCity] = useState("Chandigarh");
  const [realData, setRealData] = useState(null);
  const [day, setDay] = useState("");
  const { Title } = Typography;
  const { Header } = Layout;
  const { Search } = Input;
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let name = month[d.getMonth()];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData(city);
        console.log("api data", res);
        const getting = await insertData(res.data)
        console.log(getting);
        setData(res.data);
      } catch (err) {
        console.log("error", err);
        const Data = await getDataFromServer(city)
        console.log("get kiya", Data);
        setRealData(Data.data);
      }
    };
    fetchData();
  }, [city]);
  useEffect(() => {
    const date = new Date();
    const d = date.getDay();
    switch (d) {
      case 0:
        setDay("Sunday");
        break;
      case 1:
        setDay("Monday");
        break;
      case 2:
        setDay("Tuesday");
        break;
      case 3:
        setDay("Wednesday");
        break;
      case 4:
        setDay("Thursday");
        break;
      case 5:
        setDay("Friday");
        break;
      case 6:
        setDay("Saturday");
        break;
      default:
        console.log("");
    }
  }, []);
  return (
    <div className="container">
    {console.log('data',data,"realData",realData)}
    {data===null && realData===""?
    <Layout className="layout">
        <Logout/>
        <div id="Search">
          <Search
            placeholder="Enter City Name"
            onSearch={(value) => setCity(value)}
            style={{ width: 200 }}
          />
        </div>
        <div className="record">
        <h1 >No Record found</h1>
        </div>
      </Layout>:
      <Layout className="layout">
    <div className="myLogout"> <Logout/></div>

        <div id="Search">
          <Search
            placeholder="Enter City Name"
            onSearch={(value) => setCity(value)}
            style={{ width: 200 }}
          />
        </div>
        <Header className="content">
          <div>
            <Title style={{ color: "white" }} level={2}>
              {day}
            </Title>
            <Title style={{ color: "white" }} level={3}>
              {d?.getDate()} {name} {d?.getFullYear()}
            </Title>
          </div>
          <div>
            <Title style={{ color: "white" }} level={2}>
              {data?.name ?? realData?.name ?? "No City is there"}
            </Title>
          </div>
        </Header>
        <div id="tempicon">
          <Title id="temperature" style={{ color: "white" }} level={3}>
            {data?.main?.temp
              ? Math.floor(parseInt(data?.main?.temp) - 273)
              : Math.floor(parseInt(realData?.temp) - 273)}°C
          </Title>
        </div>
        <div id="weathericon"></div>
      </Layout>
}
    </div>
  );
};

export default Home;
