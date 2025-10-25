import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    // State to store the text being typed out
    const [text, setText] = useState("");

    // Full text to display in typing animation
    const fullText = "<Hello World />";

    useEffect(() => {
        let index = 0;

        // Interval to simulate typing effect
        const interval = setInterval(() => {
            setText(fullText.substring(0, index)); // Update text up to current index
            index++;

            // When the full text is typed
            if (index > fullText.length) {
                clearInterval(interval); // Stop the typing interval

                // Wait 1 second before signaling that loading is complete
                setTimeout(() => {
                    onComplete(); // Call the callback passed from App.jsx
                }, 1000);
            }
        }, 100); // typing speed: 100ms per character

        // Cleanup: clear interval if component unmounts
        return () => clearInterval(interval); 
    }, [onComplete]);

    return (
        // Fullscreen loading overlay
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            
            {/* Typing text animation */}
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}
                {/* Blinking cursor effect */}
                <span className="animate-blink ml-1"> | </span>
            </div>

            {/* Loading bar container */}
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                {/* Animated loading bar */}
                <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>

        </div>
    );
};
