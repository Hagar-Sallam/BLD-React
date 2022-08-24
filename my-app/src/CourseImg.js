import style from './CourseImg.module.css'
export default function Img({image})
{
    return <img className={style.img} src={image} ></img>;
}