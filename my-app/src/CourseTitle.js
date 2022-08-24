import style from './CourseTitle.module.css'

export default function Title({title})
{
    return <a className={`${style.links } ${style.headers}`}>{title}</a>;
}