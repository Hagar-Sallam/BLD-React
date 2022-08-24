import Img from './CourseImg.js'
import Title from './CourseTitle.js';
import Rate from './Rate.js';
import Author from './Author.js';
import Price from './Price.js';
import style from './Card.module.css'
export default function Card(props) {
    return (
        <div className={style.card}>

            <Img image={props.image} />
            <Title title={props.title} />
            <Author author={props.author} />
            <Rate rate={props.rate} reviewers={props.reviewers} />
            <Price price={props.price} />
        </div>
    );
}