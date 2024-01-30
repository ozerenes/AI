import React, { useEffect, ReactNode } from 'react';

interface AIProps {
    children: ReactNode;
}

const AI: React.FC<AIProps> = ({ children }) => {
    useEffect(() => {
        sendToBackend(children);
    }, [children]);

    const sendToBackend = (data: ReactNode) => {
        console.log(data)
    };

    return <ai>{children}</ai>;
};

export default AI;
