import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
export const possibleMentorsForModule = (moduleName) => {
  const module_name=mentors.filter((element)=>{
    return element.canTeach.includes(moduleName);
   
  });
 
  const new_module_name=module_name.map((ele)=>{
   return ele.name;
  
 });
 return new_module_name;
 };
// You can uncomment out this line to try your function
// console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
export const findMentorForModule = (moduleName) => {
  const avaibleMentors = mentors.filter(mentor => mentor.canTeach.includes(moduleName));
  let mentorIndex;
  if (avaibleMentors.length>0)
    mentorIndex = Math.floor(Math.random()*avaibleMentors.length);
    return mentors[mentorIndex].name;
};
// You can uncomment out this line to try your function
// console.log(findMentorForModule('javascript'));
