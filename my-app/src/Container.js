import Card from './Card.js'
import style from './Container.module.css'
export default function Container({courses}) {

    return (
        <div className={style.container}>
            <div className={style.cardsHeader}>
                <h2 className={style.headers}>Expand your career opportunities with Python
                </h2>
                <p className={`${style.barHide} ${style.temp} ${style.font}` }>Take one of Udemy’s range of Python courses and learn how to code
                    using this
                    incredibly useful
                    language. Its simple syntax and readability makes Python perfect for Flask, Django, data
                    science,
                    and machine learning. You’ll learn how to build everything from games to sites to apps. Choose
                    from
                    a range of courses that will appeal to both beginners and advanced developers alike.
                </p>
                <button className={style.btn}>Explore Python</button>
            </div>
            <div className={`${style.coursesCards} ${style.headers} ${style.hideCards}` }>
                {courses.map(card => {
                    return (
                        <Card image={card.image} title={card.title} author={card.author} rate={card.rate} reviewers={card.reviewers} price={card.price}/>
                    );
                })}
            </div>

        </div>
    );
}