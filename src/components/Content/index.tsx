import "./style.scss";
import { classNames } from "../../utils";
import {Card,CardStatistic} from '../index';
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header";
import { FormattedMessage } from "react-intl";

const data=[
  {
    id: 1,
    title:"الشركة السعودية للكهرباء",
    icon:"",
    deservedAmount: 7342.55,
    total:45,
  },
  {
    id: 2,
    title:"شركة الاتصالات السعودية",
    icon:"",
    deservedAmount: 7342.55,
    total:4
  },
  {
    id: 3,
    title:"شركة المياه الوطنية",
    icon:"",
    deservedAmount: 7342.55,
    total:4
  },
  {
    id: 4,
    title:"المنصة الوطنية للمخالفات",
    icon:"",
    deservedAmount: 7342.55,
    total:4
  },
  {
    id: 5,
    title:"هيئة قوائم",
    icon:"",
    total:4,
    deposit:125,
  },
  {
    id: 6,
    title:"هيئة الاتصالات",
    icon:"",
    total:4
  },
  {
    id: 7,
    title:"التائمنات الاجتماعية",
    icon:"",
    total:4,
    Costs:1250,
    fines:12,
  },
  {
    id: 8,
    title:"هيئة الزكاة والضريبة والجمارك",
    icon:"",
    deservedAmount: 7342.55,
    total:4,
    Costs:1250,
    fines:12,
    // deposit:125
  },
]

const Content:React.FC = () => {
  const [contentData, setcontentData] = useState([]);
  const [contentDataCard, setcontentDataCard] = useState([]);
  useEffect(() => {
    axios
    .get("./data.json")
    .then(res => {
      console.log(res.data);
      setcontentData(res.data.statistics);
      setcontentDataCard(res.data.cards);
    })
    .catch(err => {
      console.log(err);
    })  
  }, [])
  
  return (
    <div className="content">
      <Header
        title={
          <FormattedMessage id="content.header" />
        }
      />
      <ul className="content_tabs">
        {
          [
            {
              id: 1,
              name: "العدد الكلى 3",
              active: true
            },
            {
              id: 2,
              name: "السجلات الفرعية",
            },
            {
              id: 3,
              name: "عدد سجلات المؤسسات",
            },
            {
              id: 4,
              name: "السجلات المفضلة",
            },
          ].map(item => {
            return (
            <li 
              key={item.id} 
              className={classNames(
              "content_tabs_item",
              item.active && "active"
              )}
              >
              { item.name }
            </li>
            )
          })
        }
      </ul>
      <div className="content_body">
        {
          contentDataCard.length && contentDataCard?.map( (item:any) => {
            return <Card key={item.id} data={item}/>
          })
        }
      </div>
      <Header
        title={
          <FormattedMessage id="content.header" />
        }
      />
      <div className="content-wrapper">
        {
          contentData.length && contentData?.map( (item:any) => {
            return <CardStatistic key={item.id} data={item}/>
          })
        }
      </div>
    </div>
  )
}

export default Content;