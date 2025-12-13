import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;  // BUG #8 FIXED: Changed from 'string' to 'React.ReactNode'
  // 
  // PROBLEM IDENTIFIED (RESOLVED):
  //   The children prop was previously typed as 'string' which was too restrictive for a React component.
  //   This prevented the Button component from accepting React elements, fragments, or
  //   any non-string content, which is a common use case in modern React applications.
  //
  // PREVIOUS LIMITATIONS (NOW FIXED):
  //   - ✅ Works: <Button>Click me</Button>
  //   - ✅ Now Works: <Button><ArrowRight size={20} /> Get Started</Button>
  //   - ✅ Now Works: <Button>{icon} {text}</Button>
  //   - ✅ Now Works: <Button><span>Custom</span> Content</Button>
  //
  // TYPE SYSTEM IMPACT (RESOLVED):
  //   - TypeScript errors when JSX elements are passed as children: FIXED
  //   - Type definition now matches the actual runtime capability
  //   - No more need for workarounds or type assertions
  //
  // WHY THIS WAS A PROBLEM:
  //   1. Modern UI patterns often require buttons with icons, badges, or complex content
  //   2. The component implementation already supported React.ReactNode via JSX
  //   3. The type definition now matches the actual runtime capability
  //
  // ROOT CAUSE:
  //   Developer was likely trying to enforce string-only buttons for simplicity or
  //   design consistency, but didn't account for common use cases like icon buttons,
  //   buttons with badges, or buttons containing formatted text with spans/strong tags.
  //
  // SOLUTION APPLIED:
  //   Changed line 7 from: children: string;
  //   To: children: React.ReactNode;  ✅ FIXED
  //
  // REACT.REACTNODE BENEFITS:
  //   - Accepts: string, number, ReactElement, ReactFragment, ReactPortal, null, undefined
  //   - Standard React type for children props
  //   - Maintains type safety while allowing flexibility
  //   - Aligns with React best practices and common component patterns
  //
  // SEVERITY: Medium (RESOLVED)
  //   - TypeScript compilation errors: FIXED
  //   - Component reusability and flexibility: RESTORED
  //   - Developers can now use the component with any React children without type errors
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm",
    secondary: "bg-white text-primary-600 border border-primary-200 hover:bg-primary-50 focus:ring-primary-500",
    outline: "border border-slate-300 text-slate-700 hover:bg-slate-50 focus:ring-slate-400",
    ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

