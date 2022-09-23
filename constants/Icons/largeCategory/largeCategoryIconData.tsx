import {ITechcon} from "@/components/Display/Icons/Techcon";
import {FaCode, FaDev} from "react-icons/fa";
import {AiOutlineCloudServer, AiOutlineDatabase, AiOutlineNodeIndex} from "react-icons/ai";
import {TbFrame} from "react-icons/tb";
import {GrTest} from "react-icons/gr";
import {SiVisualstudio} from "react-icons/si";
import {MdNote} from "react-icons/md";


const ICON_DATA:ITechcon[] = [
    {techIcon: <FaCode color="#E1E0E6" size={45}/>, name: "Programming"},
    {techIcon: <AiOutlineDatabase color="#DD4D25" size={45}/>, name: "Data"},
    {techIcon: <TbFrame color="#31A4D5" size={45}/>, name: "Framework"},
    {techIcon: <FaDev color="#F7DF38" size={45}/>, name: "DevOps"},
    {techIcon: <AiOutlineCloudServer color="#2F74C0" size={45}/>, name: "Cloud"},
    {techIcon: <AiOutlineNodeIndex color="#186EE1" size={45}/>, name: "Knowledge"},
    {techIcon: <GrTest color="#48CEF7" size={45}/>, name: "QA"},
    {techIcon: <SiVisualstudio color="#F7DC65" size={45}/>, name: "Dev Kit"},
    {techIcon: <MdNote color="#181818" size={45}/>, name: "Etc"},
];

export default ICON_DATA;
