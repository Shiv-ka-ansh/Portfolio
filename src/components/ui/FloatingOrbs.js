"use client";

/**
 * FloatingOrbs - Animated background gradient orbs
 * 
 * COLOR PALETTE:
 * - Emerald orb: #94B4C1 (Soft Teal)
 * - Violet orb: #547792 (Steel Blue)
 * - Peach orb: #EAE0CF (Warm Cream)
 * 
 * ANIMATION: CSS keyframe-driven drift animation (orbDrift)
 * TRIGGER: Continuous, runs on page load
 * 
 * WHY: Creates depth and visual interest in the background
 * - Soft, blurred gradients feel premium and modern
 * - Slow movement adds life without being distracting
 * - Multiple orbs with different delays create organic movement
 * 
 * PERFORMANCE: Uses transform3d for GPU acceleration
 */
const FloatingOrbs = () => {
    return (
        <>
            <div className="orb orb--emerald" aria-hidden="true" />
            <div className="orb orb--violet" aria-hidden="true" />
            <div className="orb orb--peach" aria-hidden="true" />
        </>
    );
};

export default FloatingOrbs;
