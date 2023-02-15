import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"
import { useState, useEffect } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum ] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Development", "Design", "Hosting"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() );
    const period = 500;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to</span>
                        <h1>OmniSolutions, LLC.</h1>
                        <h1><span className="wrap">Website {text}</span></h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting indurstry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}