import React from 'react'
import "./style.scss";
import { classNames } from '../../utils';
import ICONS from '../../assets/icons';

interface Props {
    data:{
        id: Number;
        title: String;
        icon: String;
        deservedAmount?: Number;
        total?: Number;
        Costs?: Number;
        fines?: Number;
        deposit?: Number;
    }
}

const Card:React.FC<Props> = ({
    data
}) => {
    const iconNumber =  `icon${data?.id}`
  return (
      <div className="card-Statistic">
        <div className="card-Statistic_header">
            <h2 className="card-Statistic_header_title">
                {data.title}
            </h2>
            <div className="card-Statistic_header_logo">
                <img src={ICONS[iconNumber]} alt="logo" />
            </div>
        </div>
        <div className="card-Statistic_details">
                { data?.deservedAmount &&
                    <div className="card-Statistic_details_wrapper">
                        <div className="card-Statistic_details_title">
                            المبلغ المستحق
                        </div>
                        <div className="card-Statistic_details_value amount">
                            {JSON.stringify(data?.deservedAmount)}
                            ريال
                        </div>
                    </div>
                }
                {data?.total &&
                    <div className="card-Statistic_details_wrapper">
                        <div className="card-Statistic_details_title">
                            العدد الاجمالي  
                        </div>
                        <div className="card-Statistic_details_value">
                            {JSON.stringify(data?.total)}
                        </div>
                    </div>
                }
                {data?.Costs &&
                
                    <div className="card-Statistic_details_wrapper">
                        <div className="card-Statistic_details_title">
                        اجمالى تكاليف ممتثل  
                        </div>
                        <div className="card-Statistic_details_value">
                            {JSON.stringify(data?.Costs)}
                        </div>
                    </div>
                }
                {data?.deposit && 
                    <div className="card-Statistic_details_wrapper">
                        <div className="card-Statistic_details_title">
                            العدد الاجمالى للقوائم المالية التى تم ايداعها  
                        </div>
                        <div className="card-Statistic_details_value">
                            {JSON.stringify(data?.deposit)}
                        </div>
                    </div>
                }
                {data?.fines &&
                    <div className="card-Statistic_details_wrapper">
                        <div className="card-Statistic_details_title">
                        اجمالي الغرامات  
                        </div>
                        <div className="card-Statistic_details_value">
                            {JSON.stringify(data?.fines)}
                        </div>
                    </div>
                }
        </div>
      </div>
  )
}

export default Card