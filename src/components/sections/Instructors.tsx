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
                {instructor.tools.map((tool, idx) => (
                  <span key={tool} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                    {instructor.tools[idx + 1] || tool}  // BUG #9 ANALYSIS: Incorrect array index access
                  </span>
                ))}
              </div>
          // 
          // PROBLEM IDENTIFIED:
          //   Line 27 uses instructor.tools[idx + 1] instead of the current tool variable.
          //   This causes the wrong tool name to be displayed and will show undefined for the last tool.
          //
          // CURRENT CODE ISSUE:
          //   - Line 25: instructor.tools.map((tool, idx) => (
          //   - Line 27: {instructor.tools[idx + 1] || tool}  // ❌ WRONG - accesses next element
          //
          // HOW THE BUG MANIFESTS:
          //   Example: instructor.tools = ['Photoshop', 'Figma', 'Sketch']
          //   
          //   Iteration 0: idx=0, tool='Photoshop'
          //     - Displays: instructor.tools[0 + 1] = instructor.tools[1] = 'Figma'  // ❌ Wrong!
          //     - Should display: 'Photoshop'
          //
          //   Iteration 1: idx=1, tool='Figma'
          //     - Displays: instructor.tools[1 + 1] = instructor.tools[2] = 'Sketch'  // ❌ Wrong!
          //     - Should display: 'Figma'
          //
          //   Iteration 2: idx=2, tool='Sketch'
          //     - Displays: instructor.tools[2 + 1] = instructor.tools[3] = undefined
          //     - Falls back to: tool = 'Sketch'  // ✅ Correct by accident (fallback works)
          //
          // RUNTIME BEHAVIOR:
          //   - First N-1 tools: Display the NEXT tool in the array (wrong tool)
          //   - Last tool: Displays undefined, then falls back to correct tool via || operator
          //   - Result: All tools are shifted forward, last tool is correct only due to fallback
          //
          // WHY THIS IS A PROBLEM:
          //   1. Wrong information displayed to users
          //   2. Inconsistent behavior (last item works by accident)
          //   3. If tools array has only one item, it will show undefined
          //   4. The key={tool} uses the correct tool, but display shows wrong tool (inconsistency)
          //
          // ROOT CAUSE:
          //   Developer confused themselves with array indexing:
          //   - Possibly copied code from a different context where idx+1 was needed
          //   - May have been thinking about accessing "next" element for some reason
          //   - Didn't realize the map callback already provides the current element as 'tool'
          //   - The || tool fallback suggests they knew something was wrong but didn't fix it properly
          //
          // THE CORRECT APPROACH:
          //   The map callback already provides the current element:
          //   - (tool, idx) => tool is the current element at index idx
          //   - instructor.tools[idx] would also work but is redundant
          //   - instructor.tools[idx + 1] accesses the NEXT element (wrong)
          //
          // RECOMMENDED SOLUTION:
          //   Change line 27 from: {instructor.tools[idx + 1] || tool}
          //   To: {tool}
          //
          //   Also, the idx parameter is no longer needed:
          //   Change line 25 from: {instructor.tools.map((tool, idx) => (
          //   To: {instructor.tools.map((tool) => (
          //
          // WHY THE FALLBACK DOESN'T HELP:
          //   The || tool fallback only works for the last element when idx+1 is out of bounds.
          //   For all other elements, idx+1 is valid, so it shows the wrong tool without falling back.
          //
          // SEVERITY: Medium
          //   - Runtime error: Wrong data displayed (functional bug)
          //   - User impact: Users see incorrect tool names for instructors
          //   - Data integrity: Displayed information doesn't match actual data
          //   - Edge case: Single tool in array would show undefined
          //   - Fix complexity: Simple (use the tool variable directly)
              
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

