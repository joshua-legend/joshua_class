import React from "react";
import {_Footer} from "@/layouts/mainspace/components/Footer/styles";
import {FaChalkboardTeacher} from "react-icons/Fa";

const Footer = () => {
    return (
        <_Footer>
            <section>
                <FaChalkboardTeacher />
                <span>조슈아 클래스</span>
            </section>
            <section>ABOUT</section>
            <section>프론트 엔드 및 메가스터디 강사</section>
            <section>© JoshuaClass, 강의 예제 복사 금지</section>
        </_Footer>
    );
}

export default Footer;