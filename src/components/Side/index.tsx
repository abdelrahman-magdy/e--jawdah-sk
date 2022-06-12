import React from 'react'
import IMAGES,{ Logo } from "../../assets/images";
import "./style.scss";
import { BiUser } from "react-icons/bi";
import { classNames } from '../../utils';
import { FaRegCopy, FaUserFriends } from 'react-icons/fa';
import { GoFile } from "react-icons/go";
import { BsBook } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi"
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { changeLocale } from '../../store/actions/language';
const navItems1 = [
  {
    id: 1,
    title: "الرئيسية",
    icon: <BiUser fontSize={20} color="white"/>,
    active: true,
  },
  {
    id: 2,
    title: "الطلبات الواردة",
    icon: <FaRegCopy fontSize={20} color="white"/>,
  },
  {
    id: 3,
    title: "طلباتى",
    icon: <GoFile fontSize={20} color="white"/>,
  },
  {
    id: 4,
    title: "سجل العناوين",
    icon: <BsBook fontSize={20} color="white"/>,
  },
  {
    id: 5,
    title: " التفاويض",
    icon: <FaUserFriends fontSize={20} color="white"/>,
  },
]

const navItems2 = [
  {
    id: 1,
    title: "حجز اسم تجاري",
    icon: <BiUser fontSize={20} color="white"/>,
  },
  {
    id: 2,
    title: "تجديد سجل تجاري",
    icon: <FaRegCopy fontSize={20} color="white"/>,
  },
  {
    id: 3,
    title: "شطب اسم تجارى",
    icon: <GoFile fontSize={20} color="white"/>,
  },
]
const navItems3 = [
  {
    id: 1,
    title: "حجز اسم تجاري",
  },
  {
    id: 2,
    title: "تجديد سجل تجاري",
  },
  {
    id: 3,
    title: "شطب اسم تجارى",
  },
]

interface SideNavProps {
    headerMenu?:String,
    navItemsLinks:{
      id: Number;
      title: String;
      icon?: JSX.Element;
      active?: Boolean;
    }[]
}
const SideNav:React.FC<SideNavProps> = ({
  headerMenu,
  navItemsLinks
}) => {
  return (
  <>  
        <nav className="nav">
          {
            headerMenu &&
            <h3 className="nav_header">
              { headerMenu }
            </h3>
          }
          <ul className="nav_list">
            {
              navItemsLinks?.map( item => {
                return (
                  <li key={JSON.stringify(item.id)} className={classNames("nav_item",item?.active && "active")}>
                    { item?.icon }
                    <span>
                      { item.title }
                    </span>
                  </li>
                )
              })
            }
          </ul>
        </nav>
  </>
  )
}

const Side: () => JSX.Element = () => {
  const dispatch = useDispatch()
  const locale = useSelector((state:any) => state?.language?.locale);
  const setLocale = () => locale === 'ar' ? 'en' : 'ar'
  const changeLanguage = () => dispatch(changeLocale(setLocale()))
  return (
    <div className="side" >
      <div className="side__top">
        <div className="text-center" >
          <img src={IMAGES.logoSaudi} alt="logo" />
        </div>
        <div className="side_wrapper">
          <button onClick={changeLanguage} className="button__lang">
            <FormattedMessage id="site.language" />
          </button>
          <p className="side_great">
            <FormattedMessage id={"nav.hallo"} defaultMessage={"label"}/>
          </p>
          <div className="side_user">
            <BiUser fontSize={30} color="white"/>
            <span className="side_user_title">
              احمد خالد الغامدى القحطانى  
            </span>
            <FiLogOut style={{transform:"rotateZ(180deg)"}} fontSize={30} color="#fff"/>
          </div>
        </div>
        <SideNav
          navItemsLinks={navItems1}
        />
        <SideNav
          headerMenu="الخدمات الالكترونية"
          navItemsLinks={navItems2}
        />
        <SideNav
          headerMenu="روابط أخرى"
          navItemsLinks={navItems3}
        />
      </div>
      <div className="side__bottom">
        <div 
          className="card-alert"
          style={{backgroundImage: `url(${IMAGES.bgOneSideBar})`}}
        >
          <h3>
            اصدار سجل تجاري
          </h3>
          <p>
            اذا كنت تعلم نوع الكيان التجارى 
            <span>
              اضغط هنا
            </span>
          </p>
          <button>
            ابداء الان
          </button>
        </div>
        <div 
          className="card-note"
          style={{backgroundImage: `url(${IMAGES.bgTwoSideBar})`}}
        >
          <p>
            اصدار رخصة 
            "فورية"
            لسجل تجارى قائم
          </p>
          <button>
            اصدار الرخص التجارية
          </button>
        </div>
        <div className="copyright">
          <div className="copyright_logo">
            <Logo/>
          </div>
          <p className="copyright_who">
             تطوير الهيئة السعودية للبيانات والذكاء الاصطناعي
          </p>
          <p className="copyright_copyright">
          جميع الحقوق محفوظة للمركز السعودى للأعمال الاقتصادية
          2022 ©
          </p>
        </div>
      </div>

    </div>
  )
}

export default Side;