import React from "react";

export const StarBackGround = () => {
    const [stars,setStars]=React.useState([]);
    const [meteors,setMeteors]=React.useState([]);
    React.useEffect(()=>{
        generateStars();
        generateMeteors();
        const handleResize=()=>{
            generateStars();};
        window.addEventListener('resize',handleResize);
        return()=>{
            window.removeEventListener('resize',handleResize);
        }
    },[]);

    const generateStars=()=>{
        const numberOfStars=Math.floor((window.innerWidth * window.innerHeight)/8000);
        const newStars=[];

        for(let i=0;i<numberOfStars;i++){
            newStars.push({
                id:i,
                x:Math.random()*100,
                y:Math.random()*100,
                size:Math.random()*3+1,
                opacity:Math.random()*0.5+0.5,
                animationDuration:Math.random()*4+2
            });
        }
        setStars(newStars);



    }
    const generateMeteors=()=>{
        const numberOfMetor=4
        const newMetor=[];

        for(let i=0;i<numberOfMetor;i++){
            newMetor.push({
                id:i,
                x:Math.random()*100,
                y:Math.random()*20,
                size:Math.random()*3+1,
                delay:Math.random()*15,
                animationDuration:Math.random()*3+3
            });
        }
        setMeteors(newMetor);
        



    }
    return(
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star)=>(
                <div
                key={star.id}
                className="star animate-pulse-subtle"
                style={{
                    width:`${star.size}px`,
                    height:`${star.size}px`,
                    top:`${star.y}%`,
                    left:`${star.x}%`,
                    opacity:star.opacity,
                    animationDuration:`${star.animationDuration}s`,
                }}/>
    ))}
            {meteors.map((meteor)=>(
                <div
                key={meteor.id}
                className="meteor animate-meteor"
                style={{
                    width:`${meteor.size*15}px`,
                    height:`${meteor.size}px`,
                    top:`${meteor.y}%`,
                    left:`${meteor.x}%`,
                    animationDelay:meteor.delay,
                    animationDuration:`${meteor.animationDuration}s`,
                }}/>
    ))}
        
                
                
                </div>
    )
}