import React from 'react';

type GreetingsProps = {
    name: string;
    onClick: (name: string) => void;
};

function Greetings({ name, onClick }: GreetingsProps) {
    const handleClick = () => onClick(name);

    return(
        <div>
            Hello, {name}.
            <div>
                <button onClick={handleClick}>
                    Click Me
                </button>
            </div>
        </div>
    );
}

export default Greetings;