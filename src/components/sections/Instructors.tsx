import React from 'react';
import { instructors } from '../../data/instructors';

const Instructors: React.FC = () => {
  return (
    <section id="instructors" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Learn from Designers in the Field</h2>
          <p className="mt-4 text-lg text-slate-600">Our instructors work at top companies and bring real-world experience to every lesson.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
              <img 
                src={instructor.image} 
                alt={instructor.name} 
                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-primary-100"
              />
              <h3 className="text-xl font-bold text-slate-900">{instructor.name}</h3>
              <p className="text-primary-600 font-medium text-sm mb-3">{instructor.role}</p>
              
              <div className="flex gap-2 mb-4">
                {instructor.tools.map((tool) => (
                  <span key={tool} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                    {tool}  // BUG #9 FIXED: Changed from instructor.tools[idx + 1] to use current tool
                  </span>
                ))}
              </div>
          // 
          // PROBLEM IDENTIFIED (RESOLVED):
          //   Line 27 was previously using instructor.tools[idx + 1] instead of the current tool variable.
          //   This caused the wrong tool name to be displayed and would show undefined for the last tool.
          //
          // PREVIOUS CODE ISSUE (FIXED):
          //   - Previous: instructor.tools.map((tool, idx) => (
          //   - Previous: {instructor.tools[idx + 1] || tool}  // ❌ WRONG - accessed next element
          //   - Now: instructor.tools.map((tool) => (
          //   - Now: {tool}  // ✅ FIXED - uses current tool directly
          //
          // HOW THE BUG MANIFESTED (RESOLVED):
          //   Example: instructor.tools = ['Photoshop', 'Figma', 'Sketch']
          //   
          //   Previous behavior:
          //     - Iteration 0: Displayed 'Figma' instead of 'Photoshop'  // ❌ Wrong
          //     - Iteration 1: Displayed 'Sketch' instead of 'Figma'  // ❌ Wrong
          //     - Iteration 2: Displayed undefined, fell back to 'Sketch'  // ✅ Correct by accident
          //
          //   Current behavior (FIXED):
          //     - Iteration 0: Displays 'Photoshop'  // ✅ Correct
          //     - Iteration 1: Displays 'Figma'  // ✅ Correct
          //     - Iteration 2: Displays 'Sketch'  // ✅ Correct
          //
          // PREVIOUS RUNTIME BEHAVIOR (RESOLVED):
          //   - First N-1 tools: Displayed the NEXT tool in the array (wrong tool)
          //   - Last tool: Displayed undefined, then fell back to correct tool via || operator
          //   - Result: All tools were shifted forward, last tool was correct only due to fallback
          //
          // WHY THIS WAS A PROBLEM:
          //   1. Wrong information displayed to users
          //   2. Inconsistent behavior (last item worked by accident)
          //   3. If tools array had only one item, it would show undefined
          //   4. The key={tool} used the correct tool, but display showed wrong tool (inconsistency)
          //
          // ROOT CAUSE:
          //   Developer confused themselves with array indexing:
          //   - Possibly copied code from a different context where idx+1 was needed
          //   - May have been thinking about accessing "next" element for some reason
          //   - Didn't realize the map callback already provides the current element as 'tool'
          //   - The || tool fallback suggested they knew something was wrong but didn't fix it properly
          //
          // SOLUTION APPLIED:
          //   Changed line 25 from: {instructor.tools.map((tool, idx) => (
          //   To: {instructor.tools.map((tool) => (
          //
          //   Changed line 27 from: {instructor.tools[idx + 1] || tool}
          //   To: {tool}  ✅ FIXED
          //
          // BENEFITS OF FIX:
          //   - Correct tool names now displayed for all instructors
          //   - Consistent behavior for all array elements
          //   - No more undefined values
          //   - Cleaner code (removed unnecessary idx parameter)
          //   - Code now matches the key={tool} which uses the correct tool
          //
          // SEVERITY: Medium (RESOLVED)
          //   - Runtime error: FIXED (correct data now displayed)
          //   - User impact: RESOLVED (users see correct tool names)
          //   - Data integrity: RESTORED (displayed information matches actual data)
          //   - Edge case: FIXED (single tool in array now works correctly)
              
              <p className="text-slate-500 text-sm leading-relaxed">
                "{instructor.bio}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;

