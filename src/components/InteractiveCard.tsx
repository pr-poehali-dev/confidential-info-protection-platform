import { useState, useRef, MouseEvent } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  glassEffect?: boolean;
}

const InteractiveCard = ({ children, className = '', glassEffect = false }: InteractiveCardProps) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const glassStyles = glassEffect 
    ? 'bg-white/60 backdrop-blur-xl border-white/20 shadow-2xl' 
    : '';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'scale(1.02)' : 'scale(1)'}`,
        transformStyle: 'preserve-3d',
      }}
    >
      <div className={`relative ${glassStyles}`} style={{ transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </div>
  );
};

export { InteractiveCard };

interface InteractiveFeatureCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
  index: number;
}

const InteractiveFeatureCard = ({ icon, title, description, color, index }: InteractiveFeatureCardProps) => {
  const Icon = require('@/components/ui/icon').default;
  
  return (
    <InteractiveCard 
      className="animate-slide-up"
      glassEffect={true}
    >
      <Card className="border-2 hover:border-primary/50 transition-all bg-transparent border-white/30">
        <CardHeader>
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${color.split('-')[1]}/20 to-${color.split('-')[1]}/5 flex items-center justify-center mb-4 shadow-lg`}>
            <Icon name={icon} className={color} size={28} />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </InteractiveCard>
  );
};

export { InteractiveFeatureCard };
