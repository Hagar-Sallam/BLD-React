import style from './Author.module.css'

export default function Author({author})
{
    return <h6  className={style.font}>
        {author}
    </h6>;
}