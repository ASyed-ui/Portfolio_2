import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children }) => {
    
    // Reference to the DOM element that will be observed
    const ref = useRef(null);

    useEffect(() => {
        // Create an IntersectionObserver to detect when element enters viewport
        const observer = new IntersectionObserver(
            ([entry]) => {
                // If element is visible, add the "visible" class
                if (entry.isIntersecting) {
                    ref.current.classList.add("visible");
                }
            },
            {
                threshold: 0.2,           // 20% of the element needs to be visible
                rootMargin: "0px 0px -50px 0px" // Adjust viewport offset
            }
        );

        // Start observing the element
        if (ref.current) observer.observe(ref.current);

        // Cleanup: disconnect observer when component unmounts
        return () => observer.disconnect();
    });

    return (
        // Container for the children that will reveal on scroll
        // Initial class "reveal" should be styled in CSS for hidden state
        <div ref={ref} className="reveal">
            {children}
        </div>
    );
};
