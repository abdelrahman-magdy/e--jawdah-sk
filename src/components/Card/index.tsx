import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { BiDotsVertical } from "react-icons/bi";
import "./style.scss";
import { classNames } from '../../utils';
import IMAGES from '../../assets/images';
// const dd=[
//     {
//         id: 1,
//         title:"مؤسسة خالد للسياحة متعددة الانشطة",
//         cardTags: [
//             {
//                 id:1,
//                 title: "حالة السجل",
//                 type: "سجل قائم",
//                 status: "active" //active,expired,renewal
//             },
//             {
//                 id:2,
//                 title: "نوع السجل",
//                 type: "سجل رئيسي",
//                 status: "renewal"
//             },
//         ]
//     },
//     {
//         id: 1,
//         title:"مؤسسة الرياض للغذاء  ",
//         cardTags: [
//             {
//                 id:1,
//                 title: "حالة السجل",
//                 type: "سجل قائم",
//                 status: "expired" //active,expired,renewal
//             },
//             {
//                 id:2,
//                 title: "نوع السجل",
//                 type: "سجل رئيسي",
//                 status: "expired"
//             },
//         ]
//     },
// ]
interface propsType {
    id: Number;
    title: String;
    cardTags: {
        id: Number;
        title: String;
        type: String;
        status: String;
    }[];
}
const Card:React.FC<{data:propsType}> = ({data}) => {
    const {title,cardTags} = data
  return (
      <div className="card">
        <div className="card_header">
            <h2 className="card_header_title">
                {title}
            </h2>
            <div className="card_header_action">
                <button className="card_header_btn">
                    <FaRegStar 
                        fontSize={18} 
                        color="#1571f8"
                    />  
                </button>
                <button className="card_header_btn">
                    <BiDotsVertical
                        fontSize={18} 
                        color="#1571f8"
                    />
                </button>
            </div>
        </div>
        <div className="card_tags">
            {
                cardTags && cardTags?.map(tag => {
                    return (
                        <div key={JSON.stringify(tag.id)} className={`card_tag ${tag.status}`} >
                            <span >
                                {tag.title}
                            </span>
                            :
                            <span>
                                {tag.type}
                            </span>
                        </div>
                    )
                })
            }
        </div>
        <div className="card_details">
            {
                [
                    {
                        id:1,
                        title: "نوع الكيان التجارى",
                        value: "مؤسسة",
                        icon: IMAGES.iconBuilding
                        
                    },
                    {
                        id:2,
                        title: "تاريخ الانتهاء",
                        value: "12/12/2020",
                        icon: IMAGES.iconCalender
                        
                    },
                    {
                        id:3,
                        title: "الرقم الموحد للمنشأة",
                        value: "1234567",
                        icon: IMAGES.iconNote
                        
                    },
                    {
                        id:3,
                        title: "رقم السجل التجارى",
                        value: "81234567",
                        icon: IMAGES.iconSign
                        
                    },
                ].map(detail => (
                        <div key={detail.id} className="card_details_item">
                            <div className="card_details_image">
                                <img src={detail.icon} alt="icon"/>
                            </div>
                            <div className="card_details_content">
                                <div className="card_details_title">
                                    {detail.title}
                                </div>
                                <div className="card_details_value">
                                    {detail.value}
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>
        <div className="card_footer">
            <button className="card_footer_btn">
عرض وادارة السجل
            </button>
        </div>
      </div>
  )
}

export default Card