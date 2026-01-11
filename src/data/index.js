/**
 * Data Layer Barrel Export
 * 
 * Centralized export for all portfolio content data.
 * This separation allows easy content updates without touching components.
 * 
 * Usage:
 * import { skillGroups, projects, education } from '@/data';
 */

export { skillGroups } from './skills';
export { projects } from './projects';
export { experienceTimeline, experienceHighlights } from './experience';
export { education, certifications } from './education';
export { socials, contactInfo } from './socials';
