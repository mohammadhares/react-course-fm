import Button from "./Button";
import Detail from "./Detail";
import Image from "./Image";
import LargeHeader from "./LargeHeader";

export default function Card({ title, img, description, btnText }) {
    return (
        <section className="card">
            <LargeHeader text={title} />
            <Image imgSrc={img} alternative={title} />
            <Detail longText={description} />
            <Button text={btnText} />
        </section>
    )
}