import { useState, useEffect } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaJs, FaGithub } from 'react-icons/fa6'


export function IconCarousel() {
  const icons = [<FaReact size={40} />, <FaNodeJs size={40} />, <FaHtml5 size={40} />, <FaJs size={40} />,<FaGithub size={40} />];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 1000); // Trocar de ícone a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-[10vh]">
      <div className="icon-carousel flex items-center">
        {icons.map((icon, index) => (
          <div key={index} className={`icon-container ${currentIndex === index ? 'active transform scale-125 opacity-100' : 'opacity-50'}  inline-flex items-center justify-center w-[60px]
          h-[10px] my-0 mx-[10px] rounded-[50%]  `}>
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}
