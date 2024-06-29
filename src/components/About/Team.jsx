
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import TeamCard from "./TeamCard";

const Team = () => {
    const [currentTeam, setCurrentTeam] = useState(0);
    const [teamData, setTeamData] = useState([]);

    useEffect(()=> {
        const fetchData = async ()=> {
            const res = await fetch("https://online-survey-web-d.vercel.app/teamInfo.json");
            const data = await res.json();
            setTeamData(data);
        }
        fetchData()

        const showBg = document.querySelector(".showBg");
        showBg.classList.remove("animateBg")

        setTimeout(()=> {
            showBg.classList.add("animateBg")

        },0.1)
    },[currentTeam])
    return (
        <div className='container mx-auto grid grid-cols-6 mb-12'>
        <h1 className='text-4xl font-semibold text-center mb-3 py-4 col-span-full dark:text-white'>Meet the team</h1>
            <div className="col-span-full md:col-span-4">
            
                <div className="w-full text-lg relative z-[1] group overflow-hidden p-8 hidden md:block dark:text-white dark:border  text-neutral-800">
                    <div className="h-0 group-hover:h-full w-full duration-200 transition-all absolute top-0 left-0 rounded-full scale-150 dark:bg-neutral-800  bg-[#E9F1FA] z-[-1] text-lg showBg"></div>
                    <p><b className='text-xl'>Name: </b> {teamData[currentTeam]?.name}</p>
                    <p><b className='text-xl'>Title: </b> {teamData[currentTeam]?.title}</p>
                    <p><b className='text-xl'>Description: </b> {teamData[currentTeam]?.description} </p>

                    <div className="absolute top-1/2 right-8 text-xl space-y-3 -translate-y-1/2">
                        <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full dark:text-black  bg-white" ><FaGithub /></a>
                        <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full dark:text-black bg-white"><FaLinkedin /></a>
                        <a href="#" className="w-8 h-8 flex justify-center items-center rounded-full dark:text-black bg-white"><FaFacebook /></a>
                    </div>
                </div>
                <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 justify-center lg:grid-cols-4 md:max-h-[400px] md:overflow-auto gap-6 bg-white border-b">
                {teamData && teamData.map((member, idx)=> (
                    <TeamCard key={idx} position={idx} member={member} setCurrentTeam={setCurrentTeam} currentTeam={currentTeam} />
                ))}
                </div>
            </div>

            <div className="col-span-2 hidden md:flex justify-center items-center bg-neutral-800 dark:bg-neutral-800 dark:border dark:border-l-0">
                <img src={teamData[currentTeam]?.image} alt="team member image" className="max-h-[500px]"  />
            </div>
        </div>
    );
};

export default Team;